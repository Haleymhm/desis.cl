<?php
    require_once('db.php');
    header('Content-Type: application/json');
    
    try {
        echo $idRegion = $_GET['idregion'];
        //$idRegion = 13;

        $sql ="SELECT tbl_comuna.id as id, tbl_comuna.nombre as comuna
               FROM tbl_comuna
                    INNER JOIN tbl_provincia ON tbl_comuna.idProvincia = tbl_provincia.id
                    INNER JOIN tbl_region ON tbl_provincia.idRegion = tbl_region.id
               WHERE tbl_region.id =".$idRegion." ORDER BY comuna ASC";

        $result = mysqli_query($mysqli, $sql);
        $rows = array();

        $rows[] = ["id"=>0, "comuna"=>"Seleccione un opci&oacute;n"];
        while ($r = mysqli_fetch_assoc($result)) {
            $rows[] = ["id"=>intval($r['id']), "comuna"=>$r['id']];
        }

        $response = ['status' => 'OK',
                    'msg'    => 'Ejecutado con exito',
                    'data'   => $rows
                    ];
        echo json_encode($response);
    }catch (Exception $e) {
        $response = ['status' => 'ERROR',
                    'msg'    => 'Upss, '. $e->getMessage(),
                    'data'   =>  null];
        echo json_encode($response);
    }
?>