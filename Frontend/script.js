
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

function closemenu(){
    sidemenu.style.right = "-200px";
}
function openmenu(){
    sidemenu.style.right = "0";

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYc457sdiB0eB5v3YXd7rBWwyIojAhfI-EoB3EM53a5Lfj71uGCbzeRUf3YW_F1JqiaA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

function openProject(projectId){
    closeProject()
    var selectedWrapper = document.getElementById(projectId);
    var close = document.getElementById('closeProject');
    if(selectedWrapper){
        selectedWrapper.style.display = 'flex';
        close.style.display = 'flex';
    }else {
        console.error('Wrapper not found' + projectId);
    }
}
function closeProject(){
    var wrappers = document.getElementsByClassName("wrapper");
    var close = document.getElementById('closeProject');
    close.style.display = 'none';
    for(wrapper of wrappers){
        wrapper.style.display  = 'none';
    }
}