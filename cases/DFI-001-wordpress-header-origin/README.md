# DFI-001 — Identificación del origen real de un elemento de cabecera en WordPress

## Estado

**Tipo:** caso fundacional documentado  
**Modo DFI:** exploratorio + validación  
**Stack:** WordPress / navegador / DevTools  
**Estado:** resuelto en el contexto original; reconstrucción pública sanitizada

## Problema observable

Un elemento de información visible en la cabecera debía ser eliminado. La ruta inicialmente asumida —basada en documentación o en la configuración esperada del tema/cabecera— no explicaba el comportamiento observado.

El objetivo de la investigación no era comparar dos usuarios, sino **identificar de dónde provenía realmente el elemento visible**.

## Hipótesis inicial

**H1.** El elemento era generado por la configuración de cabecera inicialmente sospechada.

## Prueba diagnóstica

Se utilizó inspección en el navegador / DevTools para observar el elemento renderizado y obtener evidencia sobre su origen, sin realizar primero un cambio persistente.

## Evidencia

La evidencia observada no fue consistente con la ruta inicialmente asumida.

Esto redujo la plausibilidad de H1 y justificó cambiar la superficie de investigación.

## Actualización de hipótesis

**H1:** rechazada o suficientemente debilitada para no continuar modificando esa ruta.  
**H2:** el elemento provenía de otra configuración o ruta de renderizado.

## Resultado

La investigación siguió la evidencia hacia la configuración responsable y permitió corregir el origen real del elemento, en lugar de modificar de forma especulativa la configuración inicialmente sospechada.

## Por qué este caso representa DFI

El caso muestra varios principios nucleares:

- evidencia antes que suposición;
- probar antes de cambiar;
- investigación adaptativa;
- cambio de superficie cuando la evidencia contradice la ruta inicial;
- corrección dirigida al origen real;
- verificación posterior.

## Lo que este caso NO demuestra

Este caso aislado no demuestra que DFI sea universalmente más rápido o más preciso que otros métodos. Funciona como caso fundacional para documentar el mecanismo operativo.

## Privacidad

Se han omitido nombres de clientes, URLs privadas, identificadores internos, credenciales y detalles que no son necesarios para comprender la estructura diagnóstica.

## Evidencia pendiente de incorporación pública

Los artefactos originales no se publican en esta reconstrucción. Si se dispone de capturas o registros sanitizados verificables, podrán añadirse posteriormente en `evidence/` sin exponer información privada.