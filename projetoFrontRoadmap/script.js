function downloadPDF() {
    const link = document.createElement('a');
    link.href = './CV_AndersonReis.pdf';
    link.download = 'CV_AndersonReis.pdf';
    link.click();
}