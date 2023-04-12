<?php
    require_once('db.php');
    header('Content-Type: application/json');
    
    try {
        $rut = $_POST['rut'];
        $nombres = $_POST['nombres'];
        $alias = $_POST['alias'];
        $email = $_POST['email'];
        $idregion = $_POST['idregion'];
        $idcomuna = $_POST['idcomuna'];
        $idcandidato = $_POST['idcandidato'];
        $nosotros = $_POST['nosotros'];

        $sqlInsert ="INSERT INTO tbl_votacion (rut, nombres, alias, email, idregion, idcomuna, idcandidato, nosotros) VALUES ('$rut','$nombres','$alias','$email',$idregion,$idcomuna,$idcandidato,'$nosotros')";
        $mysqli->query($sqlInsert);

        $response = ['status' => 'OK',
                    'msg'    => 'Registro Creado con exito',
                    'data'   => $rut.'::'.$nombres
                    ];
        echo json_encode($response);
    }catch (Exception $e) {
        $response = ['status' => 'ERROR',
                    'msg'    => 'Upss, '. $e->getMessage(),
                    'data'   =>  null];
        echo json_encode($response);
    }
?>