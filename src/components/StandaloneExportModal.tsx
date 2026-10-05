import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, CheckCircle2 } from 'lucide-react';
import { getSingleFileHtml } from '../utils/singleFileHtml';
import { soundManager } from '../utils/audio';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const singleFileCode = getSingleFileHtml();

  const handleCopy = () => {
    soundManager.playSparkle();
    navigator.clipboard.writeText(singleFileCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    soundManager.playSparkle();
    const blob = new Blob([singleFileCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'teachers-day-sir-ghulam-ali-soomro-by-aftab.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#090e1a] border border-amber-500/30 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#060a14]">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-title text-slate-100">
                Single-File Standalone HTML Code
              </h3>
              <p className="text-xs text-slate-400">
                Self-contained HTML + Tailwind CDN + Confetti + JS audio & animations
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Code Preview */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ready for single-file copy, offline browser double-click, or static hosting!</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied HTML!' : 'Copy Code'}</span>
              </button>
              <button
                onClick={handleDownload}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-amber-200 border border-amber-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .html</span>
              </button>
            </div>
          </div>

          <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-96">
            <pre>{singleFileCode}</pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#060a14] flex items-center justify-between text-xs text-slate-400">
          <span>Dedicated to Sir Ghulam Ali Soomro • By Aftab</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
