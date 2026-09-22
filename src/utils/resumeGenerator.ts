/**
 * Downloads the pre-built resume PDF from the public directory.
 */
export const generateResumePDF = (): void => {
  const link = document.createElement('a');
  link.href = '/Hentry_Noel_CV.pdf';
  link.download = 'Hentry_Noel_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
