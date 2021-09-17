# Estudos sobre o livro Cangaceiro Javascript
Neste repositório irei armazenar meus avanços no estudo do livro "Cangaceiro Javascript".

## Sumário

### Parte	1	-	O	caminho	do	cangaceiro

####	1 Prólogo:	era	uma	vez	no	sertão
- [X]	O	problema	do	nosso	código
- [X]	O	padrão	MVC	(Model-View-Controller)

#### 2 Negociar	com	o	cangaceiro,	tem	coragem?
- [X]	O	papel	de	um	modelo
- [X]	A	classe	Negociação
- [X]	Construtor	de	classe
- [X]	Métodos	de	classe
- [X]	Encapsulamento
- [X]	A	sintaxe	get
- [X]	Objetos	imutáveis
- [X]	A	instância	é	imutável	mesmo?
- [x]	Programação	defensiva
- [x]	Menos	verbosidade	no	constructor	com	Object.assign
- [x]	Atalho	para	propriedades	de	objetos	literais
- [x]	As	surpresas	de	declarações	com	var
- [x]	Declaração	de	variáveis	com	let
- [x]	Temporal	Dead	Zone
  
#### 3	No	cangaço,	é	ação	para	todo	lado
- [ ]	O	papel	de	um	controlador
- [ ]	A	classe	NegociacaoController
- [ ]	Associando	métodos	do	controller	às	ações	do	usuário
- [ ]	Evitando	percorrer	desnecessariamente	o	DOM
- [ ]	Criando	uma	instância	de	Negociação
- [ ]	Criando	um	objeto	Date a partir da entrada do usuário
- [ ]	Um	desafio	com	datas
- [ ]	Resolvendo	um	problema	com	o	paradigma	funcional
- [ ]	Arrow	functions:	deixando	o	código	ainda	menos	verboso
  
#### 4	Dois	pesos,	duas	medidas?
- [ ]	Isolando	a	responsabilidade	de	conversão	de	datas
- [ ]	Métodos	estáticos
- [ ]	Template	literal
- [ ]	A	boa	prática	do	fail-fast

#### 5	O	bando	deve	seguir	uma	regra
- [ ]	Criando	um	novo	modelo
- [ ]	O	tendão	de	Aquiles	do	JavaScript
- [ ]	Blindando	o	nosso	modelo
  
#### 6	A	moda	no	cangaço
- [ ]	O	papel	da	View
- [ ]	Nossa	solução	de	View
- [ ]	Construindo	um	template	dinâmico
- [ ]	Totalizando	o	volume	de	negociações
- [ ]	Totalizando	com	reduce
  
#### 7	O	plano
- [ ]	Parâmetro	default
- [ ]	Criando	a	classe	MensagemView
- [ ]	Herança	e	reutilização	de	código
- [ ]	Classes	abstratas?
- [ ]	Para	saber	mais:	super
- [ ]	Adquirindo	um	novo	hábito	com	const
  
### Parte	2	-	Força	Volante

#### 8	Um	cangaceiro	sabe	delegar	tarefas
- [ ]	E	se	atualizarmos	a	View	quando	o	modelo	for	alterado?
- [ ]	Driblando	o	this	dinâmico
- [ ]	Arrow	function	e	seu	escopo	léxico
  
#### 9	Enganaram	o	cangaceiro,	será?
- [ ]	O	padrão	de	projeto	Proxy
- [ ]	Aprendendo	a	trabalhar	com	Proxy
- [ ]	Construindo	armadilhas	de	leitura
- [ ]	Construindo	armadilhas	de	escrita
- [ ]	Reflect	API
- [ ]	Um	problema	não	esperado
- [ ]	Construindo	armadilhas	para	métodos
- [ ]	Uma	pitada	do	ES2016	(ES7)
- [ ]	Aplicando	a	solução	em	NegociacaoController
  
#### 10	Cúmplice	na	emboscada
- [ ]	O	padrão	de	projeto	Factory
- [ ]	Nosso	proxy	ainda	não	está	100%!
- [ ]	Associando	modelo	e	View	através	da	classe	Bind
- [ ]	Parâmetros	REST
  
#### 11	Data	dos	infernos!
- [ ]	O	problema	com	o	input	date
- [ ]	Ajustando	nosso	converter
- [ ]	Lidando	com	exceções
- [ ]	Criando	nossa	própria	exceção:	primeira	tentativa
- [ ]	Criando	nossa	própria	exceção:	segunda	tentativa
  
#### 12	Pilhando	o	que	interessa!
- [ ]	Servidor	e	infraestrutura
- [ ]	Requisições	Ajax	com	o	objeto	XMLHttpRequest
- [ ]	Realizando	o	parse	da	resposta
- [ ]	Separando	responsabilidades
  
#### 13	Lutando	até	o	fim
- [ ]	Callback	HELL
- [ ]	O	padrão	de	projeto	Promise
- [ ]	Criando	Promises
- [ ]	Criando	um	serviço	para	isolar	a	complexidade	do
XMLHttpRequest
- [ ]	Resolvendo	Promises	sequencialmente
- [ ]	Resolvendo	Promises	paralelamente
- [ ]	Ordenando	o	período
- [ ]	Impedindo	importações	duplicadas
- [ ]	As	funções	filter()	e	some()
  
### Parte	3	-	A	revelação

#### 14	A	algibeira	está	furada!
- [ ]	IndexedDB,	o	banco	de	dados	do	navegador
- [ ]	A	conexão	com	o	banco
- [ ]	Nossa	primeira	store
- [ ]	Atualização	do	banco
- [ ]	Transações	e	persistência
- [ ]	Cursores
  
#### 15	Colocando	a	casa	em	ordem
- [ ]	A	classe	ConnectionFactory
- [ ]	Criando	Stores
- [ ]	Garantindo	uma	conexão	apenas	por	aplicação
- [ ]	O	padrão	de	projeto	Module	Pattern
- [ ]	Monkey	Patch:	grandes	poderes	trazem	grandes
responsabilidades

#### 16	Entrando	na	linha
- [ ]	O	padrão	de	projeto	DAO
- [ ]	Criando	nosso	DAO	de	negociações
- [ ]	Implementando	a	lógica	de	inclusão
- [ ]	Implementando	a	lógica	da	listagem
- [ ]	Criando	uma	DAOFactory
- [ ]	Combinando	padrões	de	projeto
- [ ]	Exibindo	todas	as	negociações
- [ ]	Removendo	todas	as	negociações
- [ ]	Factory	function
  
#### 17	Dividir	para	conquistar
- [ ]	Módulos	do	ES2015	(ES6)
- [ ]	Instalando	o	loader
- [ ]	Transformando	scripts	em	módulos
- [ ]	O	papel	de	um	transcompilador
- [ ]	Babel,	instalação	e	build-step
- [ ]	Sourcemap
- [ ]	Compilando	arquivos	em	tempo	real
- [ ]	Barrel,	simplificando	a	importação	de	módulos

#### 18	Indo	além
- [ ]	ES2017	(ES8)	e	o	açúcar	sintático	async/await
- [ ]	Para	saber	mais:	generators
- [ ]	Refatorando	o	projeto	com	async/wait
- [ ]	Garantindo	a	compatibilidade	com	ES2015
- [ ]	Lidando	melhor	com	exceções
- [ ]	Debounce	pattern:	controlando	a	ansiedade
- [ ]	Implementando	o	Debounce	pattern

#### 19	Chegando	ao	limite
- [ ]	O	padrão	de	projeto	Decorator
- [ ]	Suportando	Decorator	através	do	Babel
- [ ]	Um	problema	não	esperado	com	nosso	Decorator
- [ ]	Elaborando	um	DOM	Injector
- [ ]	Decorator	de	classe
- [ ]	Simplificando	requisições	Ajax	com	a	API	Fetch
- [ ]	Configurando	uma	requisição	com	API	Fetch
- [ ]	Validação	com	parâmetro	default
- [ ]	Reflect-metadata:	avançando	na	metaprogramação
- [ ]	Adicionando	metadados	com	Decorator	de	método
- [ ]	Extraindo	metadados	com	um	Decorator	de	classe
  
#### 20	Enfrentamento	final
- [ ]	Webpack,	agrupador	de	módulos
- [ ]	Preparando	o	terreno	para	o	Webpack
- [ ]	O	temível	webpack.config.js
- [ ]	Babel-loader,	a	ponte	entre	o	Webpack	e	o	Babel
- [ ]	Preparando	o	build	de	produção
- [ ]	Mudando	o	ambiente	com	cross-env
- [ ]	Webpack	Dev	Server	e	configuração
- [ ]	Tratando	arquivos	CSS	como	módulos
- [ ]	Resolvendo	o	FOUC	(Flash	of	Unstyled	Content)
- [ ]	Resolvemos	um	problema	e	criamos	outro,	mas	tem solução!
- [ ]	Importando	scripts
- [ ]	Lidando	com	dependências	globais
- [ ]	Otimizando	o	build	com	Scope	Hoisting
- [ ]	Separando	nosso	código	das	bibliotecas
- [ ]	Gerando	a	página	principal	automaticamente
- [ ]	Simplificando	ainda	mais	a	importação	de	módulos
- [ ]	Code	splitting	e	Lazy	loading
- [ ]	System.import	vs	import
- [ ]	Quais	são	os	arquivos	de	distribuição?
- [ ]	Deploy	do	projeto	no	GitHub	Pages
- [ ]	Alterando	o	endereço	da	API	no	build	de	produção
- [ ]	Considerações	finais