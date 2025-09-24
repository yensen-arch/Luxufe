"use client";

import React, { useState, useRef } from 'react';
import { X, Upload, FileSpreadsheet, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '../common/ToastProvider';
import { downloadSampleXLSX } from '@/lib/xlsx-utils';

interface BulkUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: () => void;
}

interface UploadResult {
  success: boolean;
  message: string;
  processedCount: number;
  errorCount: number;
  errors?: string[];
}

export default function BulkUploadModal({ isOpen, onClose, onUploadSuccess }: BulkUploadModalProps) {
  const { showToast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      showToast('Please select a valid Excel file (.xlsx or .xls)', 'error');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      showToast('File size must be less than 10MB', 'error');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const response = await fetch('/api/admin/bulk-upload-itineraries', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      const result: UploadResult = await response.json();

      if (result.success) {
        setUploadResult(result);
        showToast(`Successfully uploaded ${result.processedCount} itineraries`, 'success');
        onUploadSuccess();
      } else {
        setUploadResult(result);
        showToast(`Upload failed: ${result.message}`, 'error');
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      setUploadResult({
        success: false,
        message: error.message || 'Upload failed',
        processedCount: 0,
        errorCount: 1,
      });
      showToast('Upload failed. Please try again.', 'error');
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleClose = () => {
    if (!isUploading) {
      setUploadResult(null);
      setUploadProgress(0);
      onClose();
    }
  };

  const downloadSampleFile = () => {
    downloadSampleXLSX();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-arpona font-bold text-gray-900">
            Bulk Upload Land Itineraries
          </h3>
          <button
            onClick={handleClose}
            disabled={isUploading}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full disabled:opacity-50"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {!uploadResult ? (
            <>
              {/* Instructions */}
              <div className="mb-6">
                <h4 className="text-sm font-inter font-bold text-gray-700 mb-3">
                  Upload Instructions:
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5C8CE]">•</span>
                    <span>Upload an Excel file (.xlsx) with itinerary data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5C8CE]">•</span>
                    <span>Use the sample file format provided below</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5C8CE]">•</span>
                    <span>Fields can be empty - partial data will be uploaded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5C8CE]">•</span>
                    <span>Hero images and gallery images are not included in bulk upload</span>
                  </li>
                </ul>
              </div>

              {/* Sample File Download */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <FileSpreadsheet className="w-5 h-5 text-[#A5C8CE]" />
                  <span className="text-sm font-inter font-bold text-gray-700">
                    Download Sample File
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Use this template to ensure proper formatting for your bulk upload.
                </p>
                <button
                  onClick={downloadSampleFile}
                  className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white text-sm font-inter font-bold hover:bg-[#8bb3b8] transition-colors"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Download Sample Template
                </button>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                <button
                  onClick={handleFileSelect}
                  disabled={isUploading}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-dashed border-gray-300 hover:border-[#A5C8CE] transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {isUploading ? 'Processing...' : 'Select Excel File to Upload'}
                  </span>
                </button>

                {isUploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#A5C8CE] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Upload Results */
            <div className="space-y-4">
              <div className={`flex items-center gap-3 p-4 rounded-lg ${
                uploadResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                {uploadResult.success ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600" />
                )}
                <div>
                  <h4 className={`font-inter font-bold ${
                    uploadResult.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {uploadResult.success ? 'Upload Successful!' : 'Upload Failed'}
                  </h4>
                  <p className={`text-sm ${
                    uploadResult.success ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {uploadResult.message}
                  </p>
                </div>
              </div>

              {uploadResult.success && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <div className="text-2xl font-arpona font-bold text-green-800">
                      {uploadResult.processedCount}
                    </div>
                    <div className="text-xs text-green-600">Itineraries Created</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg text-center">
                    <div className="text-2xl font-arpona font-bold text-red-800">
                      {uploadResult.errorCount}
                    </div>
                    <div className="text-xs text-red-600">Errors</div>
                  </div>
                </div>
              )}

              {uploadResult.errors && uploadResult.errors.length > 0 && (
                <div className="p-4 bg-red-50 rounded-lg">
                  <h5 className="text-sm font-inter font-bold text-red-800 mb-2">
                    Errors:
                  </h5>
                  <ul className="text-xs text-red-700 space-y-1">
                    {uploadResult.errors.map((error, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-inter font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                {uploadResult.success && (
                  <button
                    onClick={() => {
                      setUploadResult(null);
                      setUploadProgress(0);
                    }}
                    className="px-4 py-2 text-sm font-inter font-bold text-white bg-[#A5C8CE] hover:bg-[#8bb3b8] transition-colors"
                  >
                    Upload Another File
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
