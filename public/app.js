import {DataRenderer} from "./clases.js";

fetch('data.json')
  .then((response) => {
    if(!response) throw new Error("Error al cargar el archivo JSON")
    return response.json();
  })
  .then(datos => {
    const dataRendererD = new DataRenderer(datos,'daily');
    const renderedDataHtmlD = dataRendererD.render();
    const $sectionD = document.getElementById("daily");
    $sectionD.innerHTML = renderedDataHtmlD;

    const dataRendererW = new DataRenderer(datos,'weekly');
    const renderedDataHtmlW = dataRendererW.render();
    const $sectionW = document.getElementById("weekly");
    $sectionW.innerHTML = renderedDataHtmlW;

    const dataRendererM = new DataRenderer(datos,'monthly');
    const renderedDataHtmlM = dataRendererM.render();
    const $sectionM = document.getElementById("monthly");
    $sectionM.innerHTML = renderedDataHtmlM;

    const $linkContent = document.querySelectorAll(".tabs__links");
    const $contentReport = document.querySelector(".container-report");
    const $articles = document.querySelectorAll(".report__hours");

    $contentReport.addEventListener("click",(e) => {
      let id = e.target.dataset.id;
      if(id){
        //Remove active from other buttons
        $linkContent.forEach(function(links){
            links.classList.remove("active");
            e.target.classList.add("active")
        })
        
        //hide other articles
        $articles.forEach(function(articles){
            articles.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
      }
      
    })
  })
  .catch(err => {
    console.error(err)
  })

