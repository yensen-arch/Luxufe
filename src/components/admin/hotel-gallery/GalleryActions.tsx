"use client";
import { Move, Save, Trash2 } from "lucide-react";

interface GalleryActionsProps {
  swapMode: boolean;
  deleteMode: boolean;
  savingOrder: boolean;
  deleting: boolean;
  selectedImagesToDelete: string[];
  onToggleSwap: () => void;
  onToggleDelete: () => void;
  onSaveOrder: () => void;
  onDeleteImages: () => void;
}

export default function GalleryActions({
  swapMode,
  deleteMode,
  savingOrder,
  deleting,
  selectedImagesToDelete,
  onToggleSwap,
  onToggleDelete,
  onSaveOrder,
  onDeleteImages
}: GalleryActionsProps) {
  return (
    <div className="flex items-center justify-between mb-3 px-2">
      <div className="flex gap-2">
        <button
          onClick={onToggleSwap}
          className={`px-3 py-1 text-xs font-inter font-bold transition-colors ${
            swapMode 
              ? 'bg-orange-500 text-white hover:bg-orange-600' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          <Move className="w-3 h-3 inline mr-1" />
          {swapMode ? 'Cancel Swap' : 'Swap Images'}
        </button>

        {swapMode && (
          <button
            onClick={onSaveOrder}
            disabled={savingOrder}
            className="px-3 py-1 bg-green-500 text-white text-xs font-inter font-bold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <Save className="w-3 h-3" />
            {savingOrder ? 'Saving...' : 'Save Order'}
          </button>
        )}

        <button
          onClick={onToggleDelete}
          disabled={swapMode}
          className={`px-3 py-1 text-xs font-inter font-bold transition-colors ${
            deleteMode 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          } ${swapMode ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Trash2 className="w-3 h-3 inline mr-1" />
          {deleteMode ? 'Cancel Delete' : 'Select Images to Delete'}
        </button>
      </div>
      
      {deleteMode && selectedImagesToDelete.length > 0 && (
        <button
          onClick={onDeleteImages}
          disabled={deleting}
          className="px-3 py-1 bg-red-500 text-white text-xs font-inter font-bold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        >
          <Trash2 className="w-3 h-3" />
          {deleting ? 'Deleting...' : `Delete ${selectedImagesToDelete.length} image${selectedImagesToDelete.length > 1 ? 's' : ''}`}
        </button>
      )}
    </div>
  );
}
