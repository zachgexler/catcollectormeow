// let tasks = document.getElementById("tasks");
// let form = document.getElementById("form");
// let textInput = document.getElementById("textInput");
// let dateInput = document.getElementById("dateInput");
// let textarea = document.getElementById("textarea");
// let msg = document.getElementById("msg");
// let tasks = document.getElementById("tasks");
// let add = document.getElementById("add");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   formValidation();
// });

// let formValidation = () => {
//   if (textInput.value === "") {
//     console.log("failure");
//     msg.innerHTML = "Task cannot be blank";
//   } else {
//     console.log("success");
//     msg.innerHTML = "";
//   }
// };

// let data = [];

// let acceptData = () => {
//   data.push({
//     text: textInput.value,
//     date: dateInput.value,
//     description: textarea.value,
//   });

//   localStorage.setItem("data", JSON.stringify(data));

//   console.log(data);
// };

// let formValidation = () => {

//   // Other codes are here
//    else {

//     // Other codes are here

//     acceptData();
//   }
// };

// let formValidation = () => {

//   // Other codes are here
//    else {

//     // Other codes are here

//     acceptData();
//     add.setAttribute("data-bs-dismiss", "modal");
//     add.click();

//     (() => {
//       add.setAttribute("data-bs-dismiss", "");
//     })();
//   }
// };
// let createTasks = () => {
//   tasks.innerHTML = "";
//   data.map((x, y) => {
//     return (tasks.innerHTML += `
//     <div id=${y}>
//           <span class="fw-bold">${x.text}</span>
//           <span class="small text-secondary">${x.date}</span>
//           <p>${x.description}</p>
  
//           <span class="options">
//             <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
//             <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
//           </span>
//         </div>
//     `);
//   });

//   resetForm();
// };
// let acceptData = () => {
//   // Other codes are here

//   createTasks();
// };

// let resetForm = () => {
//   textInput.value = "";
//   dateInput.value = "";
//   textarea.value = "";
// };

let dropArea = document.getElementById('drop-area')
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  };['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })
  
  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }
  dropArea.addEventListener('drop', handleDrop, false)

  function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files
  
    handleFiles(files)
  }
  function handleFiles(files) {
    ([...files]).forEach(uploadFile)
  }
  function uploadFile(file) {
    let url = 'YOUR URL HERE'
    let formData = new FormData()
  
    formData.append('file', file)
  
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(() => { /* Done. Inform the user */ })
    .catch(() => { /* Error. Inform the user */ })
  }
  function uploadFile(file) {
    var url = 'YOUR URL HERE'
    var xhr = new XMLHttpRequest()
    var formData = new FormData()
    xhr.open('POST', url, true)
  
    xhr.addEventListener('readystatechange', function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Done. Inform the user
      }
      else if (xhr.readyState == 4 && xhr.status != 200) {
        // Error. Inform the user
      }
    })
  
    formData.append('file', file)
    xhr.send(formData)
  }
  function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let img = document.createElement('img')
      img.src = reader.result
      document.getElementById('gallery').appendChild(img)
    }
  }
  function handleFiles(files) {
    files = [...files]
    initializeProgress(files.length) // <- Add this line
    files.forEach(uploadFile)
    files.forEach(previewFile)
  }
  
  function uploadFile(file) {
    let url = 'YOUR URL HERE'
    let formData = new FormData()
  
    formData.append('file', file)
  
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(progressDone) // <- Add `progressDone` call here
    .catch(() => { /* Error. Inform the user */ })
  }
  function uploadFile(file, i) { // <- Add `i` parameter
    var url = 'YOUR URL HERE'
    var xhr = new XMLHttpRequest()
    var formData = new FormData()
    xhr.open('POST', url, true)
  
    // Add following event listener
    xhr.upload.addEventListener("progress", function(e) {
      updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
    })
  
    xhr.addEventListener('readystatechange', function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Done. Inform the user
      }
      else if (xhr.readyState == 4 && xhr.status != 200) {
        // Error. Inform the user
      }
    })
  
    formData.append('file', file)
    xhr.send(formData)
  }







  dropArea.addEventListener('dragenter', handlerFunction, false)
  dropArea.addEventListener('dragleave', handlerFunction, false)
  dropArea.addEventListener('dragover', handlerFunction, false)
  dropArea.addEventListener('drop', handlerFunction, false)