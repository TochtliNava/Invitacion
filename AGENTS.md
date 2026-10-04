# Instrucciones y Reglas del Proyecto

## Comando / Trigger: "pushea cambios"

Cuando el usuario diga **"pushea cambios"**, **"pushea los cambios"** o similar:

1. **Revisar estado**:
   Ejecuta `git status` y `git diff` para identificar los cambios pendientes.
2. **Validar compilación y tipos**:
   Ejecuta:
   - `npm run build`
   - `npm run typecheck`
   *(Si alguno de estos comandos falla con errores, NO hagas commit ni push; muestra el error al usuario para corregirlo).*
3. **Preparar archivos (stage)**:
   Agrega los archivos modificados con `git add <archivos>`.
4. **Hacer commit**:
   Realiza un commit descriptivo siguiendo el formato convencional del repositorio (por ejemplo: `feat: actualizar lista de invitados`, `fix: ...`, `style: ...`).
5. **Push a GitHub Pages**:
   Ejecuta `git push origin main`. Esto disparará el flujo automático de GitHub Actions configurado en `.github/workflows/deploy.yml` para desplegar a GitHub Pages.
6. **Confirmar**:
   Informa al usuario de manera breve los archivos compilados, el commit generado y la confirmación del push.
