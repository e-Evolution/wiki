---
title: Requerimientos de Instalación con Docker
category: Configuración
star: 9
tag:
  - Servicios
  - Producto

article: false
---

# Requerimientos de Instalación con Docker (Sólo para ambientes de Prueba)


Sistema Operativo  | Descripción del Equipo | CPU | Memoria RAM | Disco Duro |
--: |-- | --: | --: | --: |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | Aplicaciones | >= 8 | >= 32GB | >= 100GB |
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
