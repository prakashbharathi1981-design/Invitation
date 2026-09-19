import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export const PrintInvitation = ({ onClose }) => {
  const mapsUrl = "https://maps.app.goo.gl/CpNfNT3Txc8kUa2D9";

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFF9ED] text-[#30201D] p-8 sm:p-12 rounded-lg border-8 border-[#C8A24D] shadow-2xl font-serif text-center">
        
        {/* Close & Print Action Header */}
        <div className="no-print flex justify-between items-center mb-6 border-b border-[#C8A24D] pb-4">
          <button
            onClick={() => window.print()}
            className="px-6 py-2 bg-[#C8A24D] text-[#170B10] font-sans font-bold text-xs uppercase tracking-widest rounded hover:bg-[#997327]"
          >
            🖨️ PRINT CARD
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#30201D] text-[#30201D] font-sans text-xs uppercase tracking-widest rounded hover:bg-gray-200"
          >
            CLOSE
          </button>
        </div>

        {/* Printable Card Content */}
        <div className="print-area space-y-6">
          {/* Actual invitation card image */}
          <div className="flex justify-center mb-2">
            <img
              src="/images/invitation_card.jpg"
              alt="Wedding Invitation Card"
              className="max-w-full rounded border-2 border-[#C8A24D] shadow-md"
              style={{ maxHeight: '280px', objectFit: 'contain' }}
            />
          </div>

          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#997327]">
            With the blessings of elders, we joyfully invite you to the
          </p>

          <h1 className="font-header text-3xl sm:text-4xl text-[#421520] underline decoration-[#C8A24D]">
            Wedding Reception Invitation
          </h1>

          <div className="my-4 text-sm font-sans text-gray-700">
            <p><strong>Mr. N. Muthusamy & Mrs. M. Nirmala</strong></p>
            <p className="my-1">&</p>
            <p><strong>Mr. T. Murugesan & Mrs. M. Visalakshi</strong></p>
          </div>

          <p className="italic text-base sm:text-lg">
            We cordially solicit your esteemed presence with family and friends on the auspicious occasion of the wedding reception of
          </p>

          <div className="my-6">
            <h2 className="font-header text-3xl text-[#421520] font-bold">
              M. Gokulakrishnan <span className="text-sm font-sans text-gray-700 font-normal">B.E. (Infosys, Bangalore)</span>
            </h2>
            <div className="font-script text-3xl text-[#C8A24D] my-1">&</div>
            <h2 className="font-header text-3xl text-[#421520] font-bold">
              Elamathi @ M. Karpagavalli <span className="text-sm font-sans text-gray-700 font-normal">B.E., (CS), ACU. (TCS, Coimbatore)</span>
            </h2>
          </div>

          <div className="border-t border-b border-[#C8A24D] py-4 my-6 font-sans text-sm space-y-1">
            <p><strong>Date:</strong> Saturday, 24 October 2026</p>
            <p><strong>Time:</strong> From 6:00 PM to 9:00 PM</p>
            <p><strong>Venue:</strong> Sri Krishna Mahal, Nachipalayam Road Corner, Trichy – Kovai Main Road, Avinashipalayam.</p>
          </div>

          <div className="flex justify-center items-center gap-6 my-4">
            <div>
              <QRCodeSVG value={mapsUrl} size={110} fgColor="#170B10" bgColor="#FFFFFF" />
              <span className="block font-sans text-[10px] text-gray-600 mt-1">SCAN FOR LOCATION MAP</span>
            </div>
          </div>

          <p className="font-sans text-xs uppercase tracking-widest text-gray-600 pt-4">
            With Best Compliments from Friends & Relatives
          </p>
        </div>

      </div>
    </div>
  );
};

