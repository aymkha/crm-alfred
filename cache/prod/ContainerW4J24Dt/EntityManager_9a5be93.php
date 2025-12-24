<?php

namespace ContainerW4J24Dt;

include_once \dirname(__DIR__, 3).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';
class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    private $valueHolder26e94 = null;
    private $initializer85ff2 = null;
    private static $publicProperties6dd3b = [
        
    ];
    public function getConnection()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getConnection', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getConnection();
    }
    public function getMetadataFactory()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getMetadataFactory', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getMetadataFactory();
    }
    public function getExpressionBuilder()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getExpressionBuilder', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getExpressionBuilder();
    }
    public function beginTransaction()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'beginTransaction', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->beginTransaction();
    }
    public function getCache()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getCache', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getCache();
    }
    public function transactional($func)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'transactional', array('func' => $func), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->transactional($func);
    }
    public function wrapInTransaction(callable $func)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'wrapInTransaction', array('func' => $func), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->wrapInTransaction($func);
    }
    public function commit()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'commit', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->commit();
    }
    public function rollback()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'rollback', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->rollback();
    }
    public function getClassMetadata($className)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getClassMetadata', array('className' => $className), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getClassMetadata($className);
    }
    public function createQuery($dql = '')
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'createQuery', array('dql' => $dql), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->createQuery($dql);
    }
    public function createNamedQuery($name)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'createNamedQuery', array('name' => $name), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->createNamedQuery($name);
    }
    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->createNativeQuery($sql, $rsm);
    }
    public function createNamedNativeQuery($name)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->createNamedNativeQuery($name);
    }
    public function createQueryBuilder()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'createQueryBuilder', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->createQueryBuilder();
    }
    public function flush($entity = null)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'flush', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->flush($entity);
    }
    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->find($className, $id, $lockMode, $lockVersion);
    }
    public function getReference($entityName, $id)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getReference($entityName, $id);
    }
    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getPartialReference($entityName, $identifier);
    }
    public function clear($entityName = null)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'clear', array('entityName' => $entityName), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->clear($entityName);
    }
    public function close()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'close', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->close();
    }
    public function persist($entity)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'persist', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->persist($entity);
    }
    public function remove($entity)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'remove', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->remove($entity);
    }
    public function refresh($entity)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'refresh', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->refresh($entity);
    }
    public function detach($entity)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'detach', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->detach($entity);
    }
    public function merge($entity)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'merge', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->merge($entity);
    }
    public function copy($entity, $deep = false)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->copy($entity, $deep);
    }
    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->lock($entity, $lockMode, $lockVersion);
    }
    public function getRepository($entityName)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getRepository', array('entityName' => $entityName), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getRepository($entityName);
    }
    public function contains($entity)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'contains', array('entity' => $entity), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->contains($entity);
    }
    public function getEventManager()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getEventManager', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getEventManager();
    }
    public function getConfiguration()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getConfiguration', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getConfiguration();
    }
    public function isOpen()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'isOpen', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->isOpen();
    }
    public function getUnitOfWork()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getUnitOfWork', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getUnitOfWork();
    }
    public function getHydrator($hydrationMode)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getHydrator($hydrationMode);
    }
    public function newHydrator($hydrationMode)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->newHydrator($hydrationMode);
    }
    public function getProxyFactory()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getProxyFactory', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getProxyFactory();
    }
    public function initializeObject($obj)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'initializeObject', array('obj' => $obj), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->initializeObject($obj);
    }
    public function getFilters()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'getFilters', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->getFilters();
    }
    public function isFiltersStateClean()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'isFiltersStateClean', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->isFiltersStateClean();
    }
    public function hasFilters()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'hasFilters', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return $this->valueHolder26e94->hasFilters();
    }
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;
        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);
        $instance->initializer85ff2 = $initializer;
        return $instance;
    }
    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;
        if (! $this->valueHolder26e94) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder26e94 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
        }
        $this->valueHolder26e94->__construct($conn, $config, $eventManager);
    }
    public function & __get($name)
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, '__get', ['name' => $name], $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        if (isset(self::$publicProperties6dd3b[$name])) {
            return $this->valueHolder26e94->$name;
        }
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder26e94;
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
        $targetObject = $this->valueHolder26e94;
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
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder26e94;
            $targetObject->$name = $value;
            return $targetObject->$name;
        }
        $targetObject = $this->valueHolder26e94;
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
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, '__isset', array('name' => $name), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder26e94;
            return isset($targetObject->$name);
        }
        $targetObject = $this->valueHolder26e94;
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
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, '__unset', array('name' => $name), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');
        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder26e94;
            unset($targetObject->$name);
            return;
        }
        $targetObject = $this->valueHolder26e94;
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
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, '__clone', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        $this->valueHolder26e94 = clone $this->valueHolder26e94;
    }
    public function __sleep()
    {
        $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, '__sleep', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
        return array('valueHolder26e94');
    }
    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }
    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer85ff2 = $initializer;
    }
    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer85ff2;
    }
    public function initializeProxy() : bool
    {
        return $this->initializer85ff2 && ($this->initializer85ff2->__invoke($valueHolder26e94, $this, 'initializeProxy', array(), $this->initializer85ff2) || 1) && $this->valueHolder26e94 = $valueHolder26e94;
    }
    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder26e94;
    }
    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder26e94;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
