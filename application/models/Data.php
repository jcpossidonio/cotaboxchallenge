<?php
class Application_Model_Data
{
  public $_dbTable;
  
  public function __construct(){
  }

  public function setDbTable($dbTable) {
    if (is_string($dbTable)) {
      $dbTable = new $dbTable();
    }
    if (!$dbTable instanceof Zend_Db_Table_Abstract) {
      throw new Exception('Invalid table data gateway provdat_ided');
    }
    $this->_dbTable = $dbTable;
    return $this;
  }

  public function getDbTable()
  {
    if (null === $this->_dbTable) {
      $this->setDbTable('Application_Model_DbTable_Data');
    }
    return $this->_dbTable;
  }

  public function save($array) {
    if (!isset($array['dat_id'])) {
      return $this->getDbTable()->insert($array);
    } else {
      return $this->getDbTable()->update($array, array('dat_id = ?' => $array['dat_id']));
    }
  }

  public function fetchAll() {
    $select = $this->getDbTable()->select()->order('dat_id ASC');
    $resultSet = $this->getDbTable()->fetchAll($select);
    foreach ($resultSet as $row) {
      $rows[] = $row;
    }
    return $rows;
  }

  public function find($dat_id) {
    $select = $this->getDbTable()->select()->where(' dat_id = '.$dat_id);
    $resultSet = $this->getDbTable()->fetchAll($select);
    foreach ($resultSet as $row) {
      $rows[] = $row;
    }
    return $rows[0];
  }

  public function delete($dat_id) {
    $this->getDbTable()->delete(" dat_id = '".$dat_id."' ");
  }

} ?>