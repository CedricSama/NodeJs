$(document).ready(function () {

    //recuperation des todos
    $.ajax({
        url:"http://localhost:8080/todo",
        type:'GET',
        accept:'application/json',
        success:function (data, success, XMLHttpRequest) {
            //ajout des todos dans le DOM
            console.log(data);

            html = '<table style="width:100%"><tr><th>votre tâche:</th><th>décrivez votre tâche:</th></tr>';
            for(let i = 0; i<data.length; i++){
                html += '<tr class="rowTask" data-id="'+data[i].id+'" style="border-bottom: 1px dotted cornflowerblue"><td class="titreRow">'+data[i].titre+'</td><td class="bodyRow">'+data[i].body+'</td><td><button class="btnUpdate btn-floating btn-large waves-effect waves-light deep-orange lighten-5 "><i class="material-icons">update</i></button></td><td><button class="btnDelete btn-floating btn-large waves-effect waves-light red lighten-1 "><i class="material-icons" >clear</i></button></td><td class="taskSelected" style="display:none">'+data[i].id+'</td></tr>'
            }

            html += '</table>';
            $('#result').html(html);

            $('.btnUpdate').click(function () {
                console.log('button updated');
                let idSelected = $(this).parent().parent().find('.taskSelected').html();
                    console.log('id selectionné pour modif',idSelected);
                let titreSelected = $(this).parent().parent().find('.titreRow').html();
                    console.log('titre selectionné pour modif',titreSelected);
                let bodySelected =$(this).parent().parent().find('.bodyRow').html();
                    console.log('body selectionné pour modif',bodySelected);
                $('#taskId').val(idSelected);
                $('#taskTitle').val(titreSelected);
                $('#taskBody').val(bodySelected);
                $(this).parent().parent().css('background-color', '#fff9c4');

            });

            $('.btnDelete').click(function () {
                let thisBtndelete = this;
                console.log('button deleted');
                let idSelected = $(this).parent().next('.taskSelected').html();
                console.log ('id selected', idSelected);
                let data = {
                   'id': idSelected
                };
                $.ajax({
                    type:"DELETE",
                    url:"/todo",
                    dataType:"json",
                    contentType:"application/json",
                    data:JSON.stringify(data),
                    success:function (dataFromServer) {
                       console.log("suppression réussie: "+dataFromServer.id);
                       //todo hide la ligne supprimée
                        console.log('btn selected', thisBtndelete);
                        $(thisBtndelete).parent().parent().hide();
                    },
                    error:function () {
                        alert('error delete')
                    }

                })
            });

        }
    });
    $('#btnAdd').click(function (e) {
        e.preventDefault();
        console.log('button clicked');
        let titreSaisi = $('#taskTitle').val();
        let bodySaisi = $('#taskBody').val();
        let idSelected = $('#taskId').val();
        console.log(titreSaisi);
        console.log(bodySaisi);

        if (idSelected == ""){
            console.log("ajout");
            let data = {
                titre:titreSaisi,
                body:bodySaisi
            };
            console.log('data avant ajax', data);
            //insertion d'une nouvelle tache
            $.ajax({
                type:"PUT",
                url:"/todo",
                dataType:"json",
                contentType:"application/json",
                data:JSON.stringify(data),
                success:function (dataFromServer) {
                    console.log("ajout réussi: "+dataFromServer.id);

                    //vider les inputs
                    $("#taskTitle").val("");
                    $("#taskBody").val("");

                    //affecter des valeurs à la nouvelle div
                    //$('.titreRow').val(dataFromServer);
                    // $('.bodyRow').val(dataFromServer);
                    $('<tr class="rowTask" style="border-bottom: 1px dotted cornflowerblue"><td class="titreRow">'+dataFromServer.titre+'</td><td class="bodyRow">'+dataFromServer.body+'</td><td><button class="btnUpdate btn-floating btn-large waves-effect waves-light deep-orange lighten-5 "><i class="material-icons">update</i></button></td><td><button class="btnDelete btn-floating btn-large waves-effect waves-light red lighten-1 "><i class="material-icons" >clear</i></button></td><td class="taskSelected" style="display:none">'+dataFromServer.id+'</td></tr>').insertAfter( $("#result").find('table').find('tr').first());

                },
                error:function () {
                    alert('error put')
                }
            });
        }else {
            //console.log("modification");
            console.log("modification",idSelected +" "+ titreSaisi +" "+ bodySaisi );
            let data = {
                id:idSelected,
                titre:titreSaisi,
                body:bodySaisi
            };
            $.ajax({
                type:"POST",
                url:"/todo",
                dataType:"json",
                contentType:"application/json",
                data:JSON.stringify(data),
                success:function (dataFromServer) {
                    console.log("modif reussie: "+data.id);
                    //vider les inputs
                    $("#taskTitle").val("");
                    $("#taskBody").val("");
                    let rowTask = $('.rowTask[data-id='+data.id+']');
                    rowTask.find('.titreRow').html(data.titre);
                    rowTask.find('.bodyRow').html(data.body);
                    //todo enlever couleur
                    $(this).parent().parent().css('background-color', 'inherit');


                }
            });




        }
    });
});

