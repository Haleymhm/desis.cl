<?php
    require_once('db.php');
    header('Content-Type: application/json');
    
    try {
        $rut = trim($_POST['rut']);
        $nombres = $_POST['nombres'];
        $alias = trim($_POST['alias']);
        $email = trim($_POST['email']);
        $idregion = $_POST['idregion'];
        $idcomuna = $_POST['idcomuna'];
        $idcandidato = $_POST['idcandidato'];
        $nosotros = $_POST['nosotros'];

        $sqlFind ="SELECT rut, nombres FROM tbl_votacion  WHERE rut ='".$rut."';";
        $mysqli->query($sqlFind);

        $numRows = $mysqli->affected_rows;
        if($numRows > 0){
            $response = ['status' => 'WARNING',
                         'msg'    => 'El votante ya se encuestra registrado',
                         'data'   => ['rut'=>$rut,'nombre'=>$nombres]
                        ];
        }else{
            $sqlInsert ="INSERT INTO tbl_votacion (rut, nombres, alias, email, idregion, idcomuna, idcandidato, nosotros) 
                     VALUES ('$rut','$nombres','$alias','$email',$idregion,$idcomuna,$idcandidato,'$nosotros')";
            $mysqli->query($sqlInsert);

            $response = ['status' => 'OK',
                        'msg'    => 'Registro Creado con exito',
                        'data'   => ['rut'=>$rut,'nombre'=>$nombres]
                        ];
        }
        echo json_encode($response);
    }catch (Exception $e) {
        $response = ['status' => 'ERROR',
                    'msg'    => 'Upss, '. $e->getMessage(),
                    'data'   =>  null];
        echo json_encode($response);
    }
?>