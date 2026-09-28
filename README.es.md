# Debugging for Instances (DFI)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22986103.svg)](https://doi.org/10.5281/zenodo.22986103) [![ORCID](https://img.shields.io/badge/ORCID-0009--0009--7371--1384-A6CE39?logo=orcid&logoColor=white)](https://orcid.org/0009-0009-7371-1384)

**Debugging for Instances (DFI)** es una propuesta metodológica de diagnóstico y depuración de software asistida por inteligencia artificial y basada en evidencia observable del sistema real.

> **Principio central:** la IA propone. La evidencia decide. El ingeniero controla.

## Publicación canónica

- **Documento fundacional:** https://zenodo.org/records/22986103
- **DOI:** https://doi.org/10.5281/zenodo.22986103
- **Autor:** Omar Argenes Quispe
- **ORCID:** https://orcid.org/0009-0009-7371-1384
- **Versión:** 1.0
- **Fecha:** 27 de septiembre de 2026

## Qué es DFI

DFI no se limita a comparar una instancia que funciona con otra que falla. La comparación es solamente uno de sus modos diagnósticos.

Una **instancia** es una manifestación concreta y observable del estado o comportamiento investigado: un elemento visual, solicitud HTTP, sesión, plugin, configuración, consulta, registro, ejecución, servicio, contenedor u otro estado observable.

## Ciclo operativo de siete fases

1. **Delimitar el problema**.
2. **Formular hipótesis contrastables**.
3. **Seleccionar la siguiente prueba diagnóstica**.
4. **Ejecutar y capturar evidencia**.
5. **Razonar y actualizar las hipótesis**.
6. **Identificar la causa y corregir con la mínima intervención justificada**.
7. **Verificar y cerrar**.

Consulta la especificación en [docs/methodology.md](docs/methodology.md).

## Ámbitos de aplicación

DFI está planteado para investigaciones en WordPress/CMS, frontend, Angular, React, Vue, backend, APIs, bases de datos, DevOps/SRE, observabilidad y seguridad defensiva autorizada.

## Estado de investigación

DFI v1.0 es una **propuesta metodológica fundacional**. Las mejoras esperadas en tiempo de diagnóstico, precisión, productividad, calidad, reducción de riesgo y reproducibilidad son hipótesis de investigación que deben ser sometidas a validación empírica controlada.

Consulta [docs/validation.md](docs/validation.md).

## Cómo documentar un caso

Usa [templates/dfi-case-template.md](templates/dfi-case-template.md) para registrar síntoma, hipótesis, pruebas, evidencia, causa, corrección, verificación, métricas y limitaciones.

El esquema JSON está disponible en [schemas/dfi-case.schema.json](schemas/dfi-case.schema.json).

## Ejemplo ejecutable

~~~bash
node examples/adaptive-probe-demo.js
~~~

El ejemplo es educativo y no constituye un motor automático de análisis de causa raíz.

## Cita

> Quispe, Omar Argenes. (2026). *Debugging for Instances (DFI): Marco metodológico de diagnóstico y depuración de software asistido por inteligencia artificial y basado en evidencia* (Versión 1.0). Zenodo. https://doi.org/10.5281/zenodo.22986103

## Licencia

La documentación DFI se distribuye bajo **CC BY-NC-ND 4.0**, en coherencia con la publicación fundacional. Los ejemplos de código de referencia se publican bajo licencia **MIT**. Consulta [LICENSE.md](LICENSE.md).

## Uso responsable

Los casos de seguridad deben ser defensivos, autorizados y basados en evidencia. No publiques credenciales, secretos, datos privados de clientes ni material destinado a acceso no autorizado.

---

**DFI v1.0 — Repositorio fundacional**  
© 2026 Omar Argenes Quispe