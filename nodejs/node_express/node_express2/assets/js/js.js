$(document).ready(function () {
    let first_name = $('#first_name');
    let Mdp = $('#password');
    let formulaire = $('form');
    let valide = false;

    //Récuperation des todos
    /*
     $.ajax({
     url: 'http://127.0.0.1:8080/todo',
     type: 'GET',
     accept: 'application/json',
     dataType: 'JSON',
     data: '{data}',
     success: (data, statut) => {
     //Ajouter des todos dans le dom
     },
     error: (resultat, statut, erreur) => {
     },
     complete: (resultat, statut) => {
     }
     });
     */

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
        if (!formulaire.hasClass('myHidden') && valide === false) {
            formulaire.addClass('myHidden');
        } else {
            formulaire.toggleClass('myHidden');
        }
        $('#champConnexion').toggleClass('myHidden');
    });
    $('button[type=submit]').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://127.0.0.1:8080/users/login/',
            type: 'PUT',
            dataType: 'JSON',
            data: {
                user: first_name.val(),
                password: Mdp.val()
            },
            success: (data, statut) => {
                for (let i = 0; i < data.length; i++) {
                    if (first_name.val() === data[i].user && Mdp.val() === data[i].password) {
                        let user = first_name.val();
                        valide = true;
                        $('#deconnexion').toggleClass('myHide');
                        $('#connexion').toggleClass('myHide');
                        $('.nav-wrapper>ul>li>a[data-activates=dropdown1]').html('Déconnexion');
                        $('#champConnexion').toggleClass('myHidden');
                        $('#divValide').toggleClass('myHidden');
                        setTimeout(function () {
                            $('#divValide').toggleClass('myHidden')
                        }, 3000);
                        $.ajax({
                            url: 'http://127.0.0.1:8080/todo/',
                            type: 'GET',
                            accept: 'application/json',
                            dataType: 'JSON',
                            data: data,
                            success: (data, statut) => {
                                for (let i = 0; i < data.length; i++) {
                                    if (user === data[i].user) {
                                        $('.todoliste').append(
                                            '<div class="col s12 m12 l6" id="todo_list">' +
                                            '<div class="card blue">' +
                                            '<div class="card-content white-text">' +
                                            '<h5>' + data[i].titre + '</h5>' +
                                            '<p>' + data[i].corps + '</p>' +
                                            '<a class="btn-floating btn-tiny waves-effect waves-light yellow darken-4 btnTodoListe btnTodoListeUpdate" data-titre="' + data[i].titre + '">' +
                                            '<i class="material-icons tiny">create</i></a>' +
                                            '<a class="btn-floating btn-tiny waves-effect waves-light yellow darken-4 btnTodoListe btnTodoListeDelete" data-titre="' + data[i].titre + '">' +
                                            '<i class="material-icons tiny">delete</i></a>' +
                                            '</div>' +
                                            '</div>' +
                                            '</div>'
                                        );
                                    }
                                }
                                $('.btnTodoListeUpdate').click(function () {
                                    console.log($(this).attr("data-titre"));
                                    $.ajax({
                                        url: 'http://127.0.0.1:8080/todo/',
                                        type: 'GET',
                                        accept: 'application/json',
                                        dataType: 'JSON',
                                        data: data,
                                        success: (data, statut) => {
                                            $('.todoliste').append(
                                                '<div class="col s12 m12 l6" id="todo_list">' +
                                                '<div class="card blue">' +
                                                '<div class="card-content white-text">' +
                                                '<h5>' + data[i].titre + '</h5>' +
                                                '<p>' + data[i].corps + '</p>' +
                                                '<a class="btn-floating btn-tiny waves-effect waves-light yellow darken-4 btnTodoListe btnTodoListeUpdate" data-titre="' + data[i].titre + '">' +
                                                '<i class="material-icons tiny">create</i></a>' +
                                                '<a class="btn-floating btn-tiny waves-effect waves-light yellow darken-4 btnTodoListe btnTodoListeDelete" data-titre="' + data[i].titre + '">' +
                                                '<i class="material-icons tiny">delete</i></a>' +
                                                '</div>' +
                                                '</div>' +
                                                '</div>'
                                            );
                                        },
                                        error: () => {
                                        }
                                    });

                                });
                                $('.btnTodoListeDelete').click(function () {
                                    console.log('leboutonfonctionne');
                                });
                            },
                            error: (resultat, statut, erreur) => {
                            }
                        });
                    } else {
                        valide = false;
                        if (valide !== true) {
                            $('#divInvalide').toggleClass('myHidden');
                            setTimeout(function () {
                                $('#divInvalide').toggleClass('myHidden')
                            }, 3000);
                        }
                    }
                    /*
                     $.ajax({
                     url: 'http://127.0.0.1:8080/user/',
                     type: 'GET',
                     accept: 'application/json',
                     dataType: 'JSON',
                     data: '{data}',
                     success: (data, statut) => {
                     //Ajouter des todos dans le dom
                     for (let i = 0; i < data.length; i++) {
                     if (first_name.val() === data[i].user && Mdp.val() === data[i].password) {
                     let user = first_name.val();
                     valide = true;
                     $('#deconnexion').toggleClass('myHide');
                     $('#connexion').toggleClass('myHide');
                     $('.nav-wrapper>ul>li>a[data-activates=dropdown1]').html('Déconnexion');
                     $('#champConnexion').toggleClass('myHidden');
                     $.ajax({
                     url: 'http://127.0.0.1:8080/todo/',
                     type: 'GET',
                     accept: 'application/json',
                     dataType: 'JSON',
                     data: 'data',
                     success: (data, statut) => {
                     for (let i = 0; i < data.length; i++) {
                     if (user === data[i].user) {
                     $('.todoliste').append(
                     '<div class="col s12 m12 l6" id="todo_list">' +
                     '<div class="card blue">' +
                     '<div class="card-content white-text">' +
                     '<h5>' + data[i].titre + '</h5>' +
                     '<p>' + data[i].corps + '</p>' +
                     '<a class="btn-floating btn-tiny waves-effect waves-light yellow darken-4 btnTodoListe">' +
                     '<i class="material-icons tiny">update</i></a>' +
                     '<a class="btn-floating btn-tiny waves-effect waves-light yellow darken-4 btnTodoListe">' +
                     '<i class="material-icons tiny">delete</i></a>' +
                     '</div>' +
                     '</div>' +
                     '</div>'
                     );
                     }
                     }
                     },
                     error: (resultat, statut, erreur) => {
                     }
                     });
                     } else {
                     console.log('NON Gro !!!');
                     }
                     }
                     },
                     error: (resultat, statut, erreur) => {
                     },
                     complete: (resultat, statut) => {
                     }
                     });
                     */
                }
            },
            error: () => {
            },
            complete: () => {
            }
        });
    });

});