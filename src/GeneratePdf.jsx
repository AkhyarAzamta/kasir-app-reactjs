import React from 'react';
import html2pdf from 'html2pdf.js';

export default function GeneratePdf() {
  function generatePdf(){
  // Ambil elemen HTML yang ingin diubah ke PDF
  const element = document.getElementById("pdf");

  // Konfigurasi untuk generate PDF
  const opt = {
    margin:       0.5,
    filename:     'StrukPembayaran.pdf',
    image:        { type: 'jpeg', quality: 1.0 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // Generate PDF
  html2pdf().set(opt).from(element).save();
}
  
  return (
    <div>
      <button className='justify-center rounded-md border border-transparent bg-green-600 lg:font-bold lg:text-lg px-4 py-2 text-sm text-white hover:bg-green-500 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
      onClick={generatePdf}>Download to PDF</button>
    </div>
  );
  
}