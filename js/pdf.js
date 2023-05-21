/* window.addEventListener('load', () => {
    const downloadButton = document.getElementById('pdf-download');
  
    downloadButton.addEventListener('click', () => {
      const sectionToConvert = document.getElementById('invoice-pdf');
  
      setTimeout(async () => {
        try {
            const canvas = await html2canvas(sectionToConvert);
            const pdf = new jsPDF('p', 'mm', 'a4');
            const divWidth = sectionToConvert.offsetWidth;
            const divHeight = sectionToConvert.offsetHeight;
            const aspectRatio = divWidth / divHeight;
            const pdfHeight = Math.floor(pdf.internal.pageSize.getWidth() / aspectRatio);
            const imageData = canvas.toDataURL('image/png');


            // Set margins and padding
            const marginInMM = 10;
            const paddingInMM = 5;
            const marginInPixels = marginInMM * 2.83465; // Convert mm to pixels
            const paddingInPixels = paddingInMM * 2.83465; // Convert mm to pixels

            const contentWidth = pdfWidth - (marginInPixels * 2);
            const contentHeight = pdfHeight - (marginInPixels * 2);
            const paddedWidth = contentWidth - (paddingInPixels * 2);
            const paddedHeight = contentHeight - (paddingInPixels * 2)

            // old code 
            pdf.addImage(imageData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);
            pdf.save('download.pdf');
        } catch (error) {
          console.error('An error occurred while generating the PDF:', error);
        }
      }, 500);
    });
});


 */

window.addEventListener('load', () => {
    const downloadButton = document.getElementById('pdf-download');
  
    downloadButton.addEventListener('click', () => {
      const sectionToConvert = document.getElementById('invoice-pdf');
  
      setTimeout(async () => {
        try {
          const canvas = await html2canvas(sectionToConvert);
          const pdf = new jsPDF('p', 'mm', 'a4');
          const divWidth = sectionToConvert.offsetWidth;
          const divHeight = sectionToConvert.offsetHeight;
          const aspectRatio = divWidth / divHeight;
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdfWidth / aspectRatio;
          const imageData = canvas.toDataURL('image/png');
  
          // Set margins and padding
          const marginInMM = 4;
          const paddingInMM = 1;
          const marginInPixels = marginInMM * 2.83465; // Convert mm to pixels
          const paddingInPixels = paddingInMM * 2.83465; // Convert mm to pixels
  
          const contentWidth = pdfWidth - (marginInPixels * 2);
          const contentHeight = pdfHeight - (marginInPixels * 2);
          const paddedWidth = contentWidth - (paddingInPixels * 2);
          const paddedHeight = contentHeight - (paddingInPixels * 2);
  
          pdf.addImage(imageData, 'PNG', marginInPixels + paddingInPixels, marginInPixels + paddingInPixels, paddedWidth, paddedHeight);
          pdf.save('download.pdf');
        } catch (error) {
          console.error('An error occurred while generating the PDF:', error);
        }
      }, 500);
    });
  });
  