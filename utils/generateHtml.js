let allCards = []
const renderTeam = ({manager, interns, engineers}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
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
            <div class='card' style='width: 18rem;'>
                <div class="card-body">
                    <h5 class="card-title">${manager.getRole()}</h5>
                    <p class="card-text">${manager.getName()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office #: ${manager.office}</li>
                </ul>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </html>` 
};







module.exports = renderTeam, generateHtml;