<?php

namespace Container3jWcWAt;
include_once \dirname(__DIR__, 3).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 3).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderbfbc2 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer9f795 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties86c30 = [
        
    ];

    public function getConnection()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getConnection', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getMetadataFactory', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getExpressionBuilder', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'beginTransaction', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getCache', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getCache();
    }

    public function transactional($func)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'transactional', array('func' => $func), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'wrapInTransaction', array('func' => $func), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'commit', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->commit();
    }

    public function rollback()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'rollback', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getClassMetadata', array('className' => $className), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'createQuery', array('dql' => $dql), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'createNamedQuery', array('name' => $name), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'createQueryBuilder', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'flush', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'clear', array('entityName' => $entityName), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->clear($entityName);
    }

    public function close()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'close', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->close();
    }

    public function persist($entity)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'persist', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'remove', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'refresh', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'detach', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'merge', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getRepository', array('entityName' => $entityName), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'contains', array('entity' => $entity), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getEventManager', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getConfiguration', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'isOpen', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getUnitOfWork', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getProxyFactory', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'initializeObject', array('obj' => $obj), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'getFilters', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'isFiltersStateClean', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'hasFilters', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return $this->valueHolderbfbc2->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer9f795 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderbfbc2) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderbfbc2 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderbfbc2->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, '__get', ['name' => $name], $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        if (isset(self::$publicProperties86c30[$name])) {
            return $this->valueHolderbfbc2->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderbfbc2;

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

        $targetObject = $this->valueHolderbfbc2;
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
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderbfbc2;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderbfbc2;
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
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, '__isset', array('name' => $name), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderbfbc2;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderbfbc2;
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
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, '__unset', array('name' => $name), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderbfbc2;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderbfbc2;
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
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, '__clone', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        $this->valueHolderbfbc2 = clone $this->valueHolderbfbc2;
    }

    public function __sleep()
    {
        $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, '__sleep', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;

        return array('valueHolderbfbc2');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer9f795 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer9f795;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer9f795 && ($this->initializer9f795->__invoke($valueHolderbfbc2, $this, 'initializeProxy', array(), $this->initializer9f795) || 1) && $this->valueHolderbfbc2 = $valueHolderbfbc2;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderbfbc2;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderbfbc2;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
