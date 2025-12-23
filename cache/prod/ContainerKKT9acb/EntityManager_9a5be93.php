<?php

namespace ContainerKKT9acb;

include_once \dirname(__DIR__, 3).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';
class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    private $valueHolder38b9f = null;
    private $initializerb4fe5 = null;
    private static $publicProperties5611b = [
        
    ];
    public function getConnection()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getConnection', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getConnection();
    }
    public function getMetadataFactory()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getMetadataFactory', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getMetadataFactory();
    }
    public function getExpressionBuilder()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getExpressionBuilder', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getExpressionBuilder();
    }
    public function beginTransaction()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'beginTransaction', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->beginTransaction();
    }
    public function getCache()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getCache', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getCache();
    }
    public function transactional($func)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'transactional', array('func' => $func), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->transactional($func);
    }
    public function wrapInTransaction(callable $func)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'wrapInTransaction', array('func' => $func), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->wrapInTransaction($func);
    }
    public function commit()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'commit', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->commit();
    }
    public function rollback()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'rollback', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->rollback();
    }
    public function getClassMetadata($className)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getClassMetadata', array('className' => $className), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getClassMetadata($className);
    }
    public function createQuery($dql = '')
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'createQuery', array('dql' => $dql), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->createQuery($dql);
    }
    public function createNamedQuery($name)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'createNamedQuery', array('name' => $name), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->createNamedQuery($name);
    }
    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->createNativeQuery($sql, $rsm);
    }
    public function createNamedNativeQuery($name)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->createNamedNativeQuery($name);
    }
    public function createQueryBuilder()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'createQueryBuilder', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->createQueryBuilder();
    }
    public function flush($entity = null)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'flush', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->flush($entity);
    }
    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->find($className, $id, $lockMode, $lockVersion);
    }
    public function getReference($entityName, $id)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getReference($entityName, $id);
    }
    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getPartialReference($entityName, $identifier);
    }
    public function clear($entityName = null)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'clear', array('entityName' => $entityName), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->clear($entityName);
    }
    public function close()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'close', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->close();
    }
    public function persist($entity)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'persist', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->persist($entity);
    }
    public function remove($entity)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'remove', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->remove($entity);
    }
    public function refresh($entity)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'refresh', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->refresh($entity);
    }
    public function detach($entity)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'detach', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->detach($entity);
    }
    public function merge($entity)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'merge', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->merge($entity);
    }
    public function copy($entity, $deep = false)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->copy($entity, $deep);
    }
    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->lock($entity, $lockMode, $lockVersion);
    }
    public function getRepository($entityName)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getRepository', array('entityName' => $entityName), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getRepository($entityName);
    }
    public function contains($entity)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'contains', array('entity' => $entity), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->contains($entity);
    }
    public function getEventManager()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getEventManager', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getEventManager();
    }
    public function getConfiguration()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getConfiguration', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getConfiguration();
    }
    public function isOpen()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'isOpen', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->isOpen();
    }
    public function getUnitOfWork()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getUnitOfWork', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getUnitOfWork();
    }
    public function getHydrator($hydrationMode)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getHydrator($hydrationMode);
    }
    public function newHydrator($hydrationMode)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->newHydrator($hydrationMode);
    }
    public function getProxyFactory()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getProxyFactory', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getProxyFactory();
    }
    public function initializeObject($obj)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'initializeObject', array('obj' => $obj), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->initializeObject($obj);
    }
    public function getFilters()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'getFilters', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->getFilters();
    }
    public function isFiltersStateClean()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'isFiltersStateClean', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->isFiltersStateClean();
    }
    public function hasFilters()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'hasFilters', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return $this->valueHolder38b9f->hasFilters();
    }
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;
        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);
        $instance->initializerb4fe5 = $initializer;
        return $instance;
    }
    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;
        if (! $this->valueHolder38b9f) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder38b9f = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
        }
        $this->valueHolder38b9f->__construct($conn, $config, $eventManager);
    }
    public function & __get($name)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, '__get', ['name' => $name], $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        if (isset(self::$publicProperties5611b[$name])) {
            return $this->valueHolder38b9f->$name;
        }
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder38b9f;
            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }
        $targetObject = $this->valueHolder38b9f;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();
        return $returnValue;
    }
    public function __set($name, $value)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder38b9f;
            $targetObject->$name = $value;
            return $targetObject->$name;
        }
        $targetObject = $this->valueHolder38b9f;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();
        return $returnValue;
    }
    public function __isset($name)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, '__isset', array('name' => $name), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder38b9f;
            return isset($targetObject->$name);
        }
        $targetObject = $this->valueHolder38b9f;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();
        return $returnValue;
    }
    public function __unset($name)
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, '__unset', array('name' => $name), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder38b9f;
            unset($targetObject->$name);
            return;
        }
        $targetObject = $this->valueHolder38b9f;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);
            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }
    public function __clone()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, '__clone', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        $this->valueHolder38b9f = clone $this->valueHolder38b9f;
    }
    public function __sleep()
    {
        $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, '__sleep', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
        return array('valueHolder38b9f');
    }
    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }
    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerb4fe5 = $initializer;
    }
    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerb4fe5;
    }
    public function initializeProxy() : bool
    {
        return $this->initializerb4fe5 && ($this->initializerb4fe5->__invoke($valueHolder38b9f, $this, 'initializeProxy', array(), $this->initializerb4fe5) || 1) && $this->valueHolder38b9f = $valueHolder38b9f;
    }
    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder38b9f;
    }
    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder38b9f;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
