<?php
    require_once('db.php');
    header('Content-Type: application/json');
    try {
        $result = mysqli_query($mysqli, "SELECT id, nombre as region FROM tbl_region;" );
        $rows = array();

        $rows[] = ["id"=>0, "region"=>"Seleccione un opci&oacute;n"];
        while ($r = mysqli_fetch_assoc($result)) {
            $rows[] = ["id"=>intval($r['id']), "region"=>$r['id']];
        }

        $response = ['status' => 'OK',
                    'msg'    => 'Ejecutado con exito',
                    'data'   => $rows
                    ];
        echo json_encode($response);
    }catch (\Throwable $th) {
        $response = ['status' => 'ERROR',
                    'msg'    => 'Upss, A ocurrido un error, consulte son el administrador',
                    'data'   =>  null];
        echo json_encode($response);
    }
?>