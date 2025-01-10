# Exemplos de Código Síncrono e Assíncrono em JavaScript

Este repositório demonstra diferentes abordagens para lidar com operações síncronas e assíncronas em JavaScript, apresentando três implementações diferentes do mesmo problema: uma versão síncrona, uma usando callbacks e outra usando Promises.

## 📝 Visão Geral

O projeto contém exemplos práticos que ilustram as diferenças entre:
- Execução síncrona tradicional
- Programação assíncrona com callbacks
- Programação assíncrona moderna com Promises

## 🔍 Diferenças Principais

1. **Código Síncrono**
   - Executa de forma sequencial
   - Bloqueia a execução até a operação ser concluída
   - Mais simples de entender e debugar
   - Pode causar problemas de performance em operações demoradas

2. **Código com Callbacks**
   - Não bloqueia a execução
   - Permite executar código após a conclusão da operação
   - Pode levar ao "callback hell" em operações encadeadas
   - Mais difícil de tratar erros

3. **Código com Promises**
   - Não bloqueia a execução
   - Sintaxe mais limpa e moderna
   - Melhor tratamento de erros com .catch()
   - Permite encadeamento de operações com .then()
   - Compatível com async/await

## 🛠️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/sync-async-examples.git
```

2. Entre no diretório:
```bash
cd sync-async-examples
```

3. Execute os exemplos com Node.js:
```bash
node sync.js
node async.js
```
