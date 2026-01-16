const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {
  //conteúdo a ser convertido em PDF
  const content = document.querySelector("#content");

  //configurações do PDF
  const options = {
    margin: [10, 10, 10, 10],
    filename: "documento.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  //gerar o PDF
  html2pdf().set(options).from(content).save();
});
