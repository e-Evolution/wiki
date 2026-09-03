---
title: Definición de Cluster
category: Configuración
star: 9
tag:
  - Servicios
  - Producto

article: false
---

# Definición de Cluster

El siguiente es un ejemplo de lo mínimo requerido para habilitar la infraestructura basada en kubernetes para ADempiere, esto puede variar dependiendo de la cantidad de usuarios, procesos y tareas realizadas. Para un dimensionamiento más específico contacte al equipo técnico de ERP Consultores y Asociados, C.A.

Sistema Operativo | Minimo | Deseable | Descripción del Equipo | Core | Memoria RAM | Disco Duro |
--: |--: | --: | -- | --: | --: | --: |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 0 | 3 |ETCD / Base de Datos de Kubernetes | >= 4 | >= 8GB | >= 100GB |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 1 | 3 | Master / Principal | >= 4 | >= 8GB | >= 100GB |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 1 | 3 | Worker / Aplicaciones | >= 8 | >= 32GB | >= 100GB |

Como resumen se pude ver la siguiente tabla. Esto se muestra por servidor
Sistema Operativo  | Descripción del Equipo | Core | Memoria RAM | Disco Duro |
--: |-- | --: | --: | --: |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | Aplicaciones | >= 16 | >= 48GB | >= 300GB |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | Almacenamiento | >= 8 | >= 32GB | >= 1TB |

## Particionamiento

Dado que será instalado como un ambiente de pruebas, recomentamos que sólo se tenga una sóla partición  con el punto de montaje `/`.

## Software Requerido

Por lo general únicamente se necesita el controlador de red y un servicio de openssh-server. A continuación la lista de paquetes que debería considerar para instalar:

- Network Utilities
- SSH Server

Los paquetes para desktop y modo gráfico no son requeridos y no recomendamos su instalación

## General

- El lenguaje por defecto recomendamos **Inglés Estados Unidos**
