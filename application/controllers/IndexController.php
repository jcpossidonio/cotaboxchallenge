<?php
class IndexController extends Zend_Controller_Action {

  public function init() {
  }

  public function indexAction() {
  }

  public function listAction() {
  	// inicia o model
 	  $data = new Application_Model_Data();
 	  // pega os registros
    $itens = $data->fetchAll();
    // manda registros para a view para exibir
    $this->view->itens = $itens;
  }

  public function addAction() {
    // remove porcentagem do campo dat_participation
   	$_POST['dat_participation'] = str_replace('%','',$_POST['dat_participation']);
   	// ajusta campo dat_participation para salvar no banco de dados
   	$_POST['dat_participation'] = number_format($_POST['dat_participation'],2,'.','');
   	// inicia o model
   	$data = new Application_Model_Data();
   	// salva no banco de dados
    $data->save($_POST);
    echo 'ok';
   	exit;
  }

  public function removeAction() {
    // pega a id do item a ser removido
    $id = $_GET['dat_id'];
    // inicia o model
    $data = new Application_Model_Data();
    // remove o item do banco de dados
    $data->delete($id);
    echo 'ok';
    exit;
  }

}