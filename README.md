# Conceitos-SOLID
### O objetivo desse projeto foi aprender alguns conceitos do SOLID
#
- [x] S : singlie responsibility principle
- [ ] O: Open/closed principle
- [ ] L: Liskov substitution principle
- [ ] I: Interface segregation principle
- [x] Dependency inversion principle

O projeto esta dividido em pastas: __services, model, repositories__

__services__ : nesta pasta esta toda regra de negócio da aplicação. Ela deve conter uma única responsabilidade (com um único método).

__model__: representa o modelo que os dados serão salvo na apliacação.

__repository__: responsável por toda parte de dados, é nela que iremos 'conversar' com o banco para busca de dados.

A parte de __rota__ só ficou resposável pela transformação de dados, requisição, chamada de outro arquivo e resposta.

Um dos conceitos trabalhado nesse projeto foi o DTO (Data transfer Object), que é a movimentação dos dados dentro do projeto (de uma pasta para outra).
