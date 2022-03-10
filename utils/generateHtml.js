const renderTeam = ({manager, interns, engineers}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Inter:wght@300&family=Merriweather:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">My Team Builder</h1>
                  <p class="lead">This is a generated team builder using node.js!</p>
                </div>
            </div>
            <div class='container'>
                <div class='row justify-content-center'>
                   <div class='col-4 mt-4'> 
                    <div class='card bg-info h-100 mb-3' style='width: 18rem;'>
                            <div class="card-body text-white">
                                <h5 class="card-title">${manager.getRole()}</h5>
                                <p class="card-text">${manager.getName()}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email:<a href="mailto: ${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                                <li class="list-group-item">Office #: ${manager.office}</li>
                            </ul>
                        </div>
                       </div>             
            ${interns.map(quals => {
                return addIntern(quals)
            }).join('')}
            ${engineers.map(quals => {
                return addEngineer(quals)
            }).join('')}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </html>` 
};

function addIntern(intern) {
    return `<div class='col-4 mt-4'>
                <div class='card bg-info h-100 mb-3' style='width: 18rem;'>
                    <div class="card-body text-white">
                        <h5 class="card-title">${intern.getRole()}</h5>
                        <p class="card-text">${intern.getName()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`
}

function addEngineer(engineer) {
    return `<div class='col-4 mt-4'>
                <div class='card bg-info h-100 mb-3' style='width: 18rem;'>
                    <div class="card-body text-white">
                        <h5 class="card-title">${engineer.getRole()}</h5>
                        <p class="card-text">${engineer.getName()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto: ${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
                        <li class="list-group-item">Github:<a href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
                    </ul>
                </div>
            </div>`
}






module.exports = renderTeam;