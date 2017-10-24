$(document).ready(function () {
    //Récuperation des todos
    $.ajax({
        url: 'http://127.0.0.1:8080/todo',
        type: 'GET',
        accept: 'application/json',
        dataType: 'JSON',
        data: 'data',
        success: (data, statut) => {
            //Ajouter des todos dans le dom
            console.log("Grand Succés");
            console.log(statut, 'success');
            console.log(data);
        },
        error: (resultat, statut, erreur) => {
            console.log(statut, 'erreur');
            console.log(erreur, "log de l'erreur");
            console.log("C'est un échec")
        },
        complete: (resultat, statut) => {
            console.log(statut, 'complete');
        }
    });

    $('#btnAdd').click(function () {
        console.log('Ecoute du Bouton Add');
    });
    $('#btnDelete').click(function () {
        console.log('Ecoute du Bouton Delete');
    });
    $('#btnModify').click(function () {
        console.log('Ecoute du Bouton Modif');
    });
    $('#connexion').click(function () {
        $('form').toggleClass('myHidden');
    });
    $('button[type=submit]').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://127.0.0.1:8080/users/',
            type: 'GET',
            accept: 'application/json',
            dataType: 'JSON',
            data: 'data',
            success: (data, statut) => {
                //Ajouter des todos dans le dom
                for (let i = 0; i < data.length; i++) {
                    if ($('#first_name').val() === data[i].user && $('#password').val() === data[i].password) {

                        console.log('Bravo Gro !!')
                    }else {
                        console.log('Login ou Mdp incorrect')
                    }
                }
            },
            error: (resultat, statut, erreur) => {
            },
            complete: (resultat, statut) => {
            }
        });
    });
});