
function downloadCV() {
    var cvUrl = 'src/documents/Irena_Grocka_CV.pdf';

    // Create an anchor element
    var anchorElement = document.createElement('a');
    anchorElement.href = cvUrl;
    anchorElement.download = 'Irena_Grocka_CV.pdf';

    // Add click event listener to the download button
    document.getElementById('downloadButton').addEventListener('click', downloadCV);
}