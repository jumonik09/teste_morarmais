const ambientes = [
  [1, "Jardim Modernista", "1º Pavimento"],
  [2, "Bilheteria", "1º Pavimento"],
  [3, "Sala Estado de Outono", "1º Pavimento"],
  [4, "Gabinete da Colecionadora", "1º Pavimento"],
  [5, "Galeria Alexandre Lemos", "1º Pavimento"],
  [6, "Galeria Robson Emerick", "1º Pavimento"],
  [7, "Sala de Banho Raízes", "1º Pavimento"],
  [8, "Sala de Leitura Travessia", "1º Pavimento"],
  [9, "Galeria Arco Abatido", "1º Pavimento"],
  [10, "Quarto Entre Laços", "2º Pavimento"],
  [11, "Costurando Memórias", "2º Pavimento"],
  [12, "Entre Tempos", "2º Pavimento"],
  [13, "Varanda Bruma Curral", "2º Pavimento"],
  [14, "Banheiro Público | Refúgio Diário", "2º Pavimento"],
  [15, "Ateliê da Escritora", "2º Pavimento"],
  [16, "O Jantar Eterno", "1º Pavimento"],
  [17, "Loja Querê Home | Memórias à Mesa", "1º Pavimento"],
  [18, "Coração da Casa", "1º Pavimento"],
  [19, "Banheiro Público | Alma Natural", "Subsolo"],
  [20, "Minas Moda Autoral | Sebrae", "Subsolo"],
  [21, "Bar Raízes & Aço | Natureza e Matéria em Equilíbrio", "Subsolo"],
  [22, "ESTAÇÃO DAS GERAIS", "Subsolo"],
  [23, "Raízes", "Subsolo"],
  [24, "Ateliê Kokedama | Casa Verde Paisagismo", "Subsolo"],
];
const rooms = document.querySelector("#rooms"),
  count = document.querySelector("#roomCount"),
  mapMarkers = document.querySelector("#mapMarkers"),
  selectedNumber = document.querySelector("#selectedNumber"),
  selectedName = document.querySelector("#selectedName"),
  selectedFloor = document.querySelector("#selectedFloor"),
  selectedImage = document.querySelector("#selectedImage"),
  selectedPhoto = document.querySelector("#selectedPhoto");
const photoData = {
  1: {
    src: "MMBH26-©Ivan Araújo (43).jpg",
    name: "Jardim Modernista",
    professional: "Danilo Magalhães",
    contacts:
      '<a href="tel:+5531983173240">31 98317 3240</a><a href="mailto:magalhaesdanilo965@gmail.com">magalhaesdanilo965@gmail.com</a><a href="https://www.instagram.com/danilomagalhaesinteriores/" target="_blank" rel="noopener noreferrer">@danilomagalhaesinteriores</a>',
    concept:
      "<p>O tempo nunca destrói aquilo que tem essência, apenas aguarda o instante de florescer novamente. Nesta transformação, o jardim modernista desperta do silêncio e reencontra sua voz. Entre memória e permanência, a natureza ressignifica o passado, provando que o verdadeiro legado não envelhece: renasce.</p>",
    partners:
      "Ananda Sant’Anna, By Pinho, Classic Móveis, Ecometal.Bh — Serralheria Criativa, Falci Elétrica, Gerais Elétrica, LGamalier Facility, Resoluto Store by Dan Rockers, Tirol Plantas, Varejão das Tintas | Suvinil.",
  },
  2: {
    src: "MMBH26-©Ivan Araújo (23).jpg",
    name: "Bilheteria | O Brasil visto do espaço",
    professional: "Mônica Viana",
    contacts:
      '<a href="tel:+5531991913499">(31) 99191-3499</a><a href="https://www.instagram.com/monicadesignerviana/" target="_blank" rel="noopener noreferrer">Instagram: @monicadesignerviana</a>',
    concept:
      "<p>A Bilheteria da Mostra convida o público, logo na entrada, a vivenciar uma nova perspectiva do Brasil. O relevo do país é representado artisticamente em 3D, proporcionando a sensação de observá-lo do espaço.</p><p>A proposta revela as formas das serras, os picos das montanhas, o desenho dos rios e a presença das matas e florestas, representadas por pequenas esferas verdes conhecidas como Kokedama ou Kokelady, criando uma experiência sensorial e contemplativa.</p>",
    partners:
      "André Sanna Castilho, Arqué Móveis, Criamobile, Ecometal.BH — Serralheria Criativa, Falci Elétrica, Gama Engenharia e Projetos, LGamalier Facility, Kokedama ou Kokelady?, Log Soluções Corporativas, Varejão das Tintas | Suvinil.",
  },
  3: {
    src: "MMBH26-©Ivan Araújo (35) (1).jpg",
    name: "Sala Estado de Outono",
    professional: "Danilo Magalhães",
    contacts:
      '<a href="tel:+5531983173240">(31) 98317-3240</a><a href="mailto:magalhaesdanilo965@gmail.com">magalhaesdanilo965@gmail.com</a><a href="https://www.instagram.com/danilomagalhaesinteriores/" target="_blank" rel="noopener noreferrer">Instagram: @danilomagalhaesinteriores</a>',
    concept:
      "<p>A Sala Estado de Outono celebra o tempo de desacelerar. Tons acolhedores, texturas naturais e intervenções acessíveis transformam o ambiente em um verdadeiro refúgio de conforto e contemplação.</p><p>O projeto valoriza a beleza do essencial, promovendo bem-estar e resgatando as memórias que aquecem a casa, em uma atmosfera convidativa e atemporal.</p>",
    partners:
      "Alexandre Lemos Fine Art, By Pinho, Casa Singular Móveis, Falci Elétrica, Granvilla Acabamentos, Guia Decor, Kálamo, La Veni Decor, LGamalier Facility, Luminato | Othon de Carvalho, Myrla Louredo, Original Deccor, Orrana Passos, Pinturas Original Express, Portal Mármores e Granitos, Querê Home, Rico Maciel, TecnoDry, Varejão das Tintas | Suvinil.",
  },
  4: {
    src: "MMBH26-©Ivan Araújo (50).jpg",
    name: "Gabinete da Colecionadora",
    professional: "Studio Oito Arquitetura",
    contacts:
      '<span class="contact-person">Ítalo Freitas <a href="tel:+5531994455660">(31) 99445-5660</a></span><span class="contact-person">Ana Júlia <a href="tel:+5538988051290">(38) 98805-1290</a></span><a href="mailto:studiooitoarq@gmail.com">studiooitoarq@gmail.com</a><a href="https://www.instagram.com/studiooitoarq/" target="_blank" rel="noopener noreferrer">Instagram: @studiooitoarq</a>',
    concept:
      "<p>O Gabinete da Colecionadora transforma memórias em um espaço onde trabalho e contemplação convivem em harmonia. Arte, design e cultura mineira se unem em uma proposta atemporal, na qual cada peça carrega significado e cada escolha celebra a permanência, o afeto e o tempo vivido com calma.</p>",
    partners:
      "Arqué Móveis, Falci Elétrica, Kaili Oliveira — Colecionadora, La Veni Decor, LGamalier Facility, Luminato | Othon de Carvalho, Portobello Shop, Placas.",
  },
  5: {
    src: "MMBH26-©Ivan Araújo (7).jpg",
    name: "Galeria Alexandre Lemos | Horizonte Vertical",
    professional: "Pavilhão 95 Arquitetura",
    contacts:
      '<span class="contact-person">Matheus Nery</span><span class="contact-person">Gabriel Fernandes</span><span class="contact-person">Sabrina Martins</span><a href="tel:+5531991342450">(31) 99134-2450</a><a href="mailto:contato@pavilhao95.com">contato@pavilhao95.com</a><a href="https://www.instagram.com/pavilhao95arquitetura/" target="_blank" rel="noopener noreferrer">Instagram: @pavilhao95arquitetura</a><a href="https://www.pavilhao95.com/" target="_blank" rel="noopener noreferrer">www.pavilhao95.com</a><span class="contact-heading">Alexandre Lemos Fine Art</span><a href="tel:+5531999195326">(31) 99919-5326</a><a href="https://www.instagram.com/alexandrelemosfineart/" target="_blank" rel="noopener noreferrer">Instagram: @alexandrelemosfineart</a>',
    concept:
      "<p>No coração da Casa Cortez de Paula, a escada se transforma em um horizonte vertical que acolhe as obras de Alexandre Lemos. De um lado, recortes de vegetação compõem um jardim desconstruído; do outro, a imensidão do céu cria uma atmosfera de contemplação, conectando arte, arquitetura e natureza.</p>",
    partners:
      "Alexandre Lemos Fine Art, By Pinho, Ecometal.BH — Serralheria Criativa, Falci Elétrica, Gamma Cortinas, La Veni Decor, Luminato | Othon de Carvalho, Marrocos Interiores, Varejão das Tintas | Suvinil.",
  },
  6: {
    src: "arte1-melhorada.png",
    name: "Galeria Robson Emerick",
    professional: "Robson Emerick",
    contacts:
      '<a href="tel:+5531997753574">(31) 99775-3574</a><a href="https://www.instagram.com/robsonemerickdesigner/" target="_blank" rel="noopener noreferrer">Instagram: @robsonemerickdesigner</a>',
    concept:
      "<p>Em <em>Minerais Florando da Terra</em>, Robson Emerick transforma aço reaproveitado em esculturas inspiradas nos cristais e nas montanhas de Minas Gerais. As formas e cores evocam a força, a memória e a riqueza mineral do estado, unindo sustentabilidade, arte contemporânea e a valorização do patrimônio natural e cultural.</p>",
    partners:
      "Falci Elétrica, Gerais Elétrica, Resoluto Store by Dan Rockers, Varejão das Tintas | Suvinil.",
    credit: false,
  },
  7: {
    src: "MMBH26-©Ivan Araújo (53).jpg",
    name: "Sala de Banho Raízes",
    professional: "Guilherme Ferreira",
    contacts:
      '<a href="tel:+5531995771182">(31) 99577-1182</a><a href="mailto:gfarquiteturaeinteriores97@gmail.com">gfarquiteturaeinteriores97@gmail.com</a><a href="https://www.instagram.com/guilhermeferreira.arq/" target="_blank" rel="noopener noreferrer">Instagram: @guilhermeferreira.arq</a>',
    concept:
      "<p>A Sala de Banho Raízes ressignifica o cotidiano por meio de um retrofit que preserva a arquitetura original do espaço. Com revestimentos Strufaldi, a exclusividade do Verde Ficus e o projeto de iluminação da Luminato | Othon de Carvalho, o ambiente traduz bem-estar, sustentabilidade, personalização e o conceito Mais por Menos, valorizando o design brasileiro em cada detalhe.</p>",
    partners:
      "Ateliê Tonielli, Dicas & Alegrias, Effeito Cortinas, Eucatex, Falci Elétrica, Fícus Rochas Ornamentais, Flávia Adriano — A Braba dos Vidros, Granvilla Acabamentos, Kálamo, La Veni Decor, Luminato | Othon de Carvalho, Marrocos Interiores, SH Decor.",
  },
  8: {
    src: "MMBH26-©Ivan Araújo (31).jpg",
    name: "Sala de Leitura Travessia",
    professional: "Nathalia Picoli & Lucas De Mitri",
    contacts:
      '<span class="contact-person">Nathalia Picoli <a href="tel:+5532998848416">(32) 99884-8416</a></span><a href="https://www.instagram.com/nathaliapicoli.arq/" target="_blank" rel="noopener noreferrer">Instagram: @nathaliapicoli.arq</a><span class="contact-person">Lucas De Mitri <a href="tel:+5519993441692">(19) 99344-1692</a></span><a href="https://www.instagram.com/designdemitri/" target="_blank" rel="noopener noreferrer">Instagram: @designdemitri</a>',
    concept:
      "<p>A Sala de Leitura Travessia transforma a literatura em espaço, celebrando a força das narrativas e a riqueza do design brasileiro. Livros, arte e mobiliário autoral se unem a materiais sustentáveis para criar uma atmosfera de acolhimento, contemplação e descoberta.</p><p>Cada detalhe convida o visitante a desacelerar, percorrer novas histórias e reconhecer a beleza que nasce do encontro entre memória, cultura e criação. Mais do que um ambiente, <em>Travessia</em> é um convite para habitar o tempo da leitura e viver experiências que permanecem.</p>",
    partners:
      "Casa Singular Móveis, Efeitto Cortinas, Falci Elétrica, Granvilla Acabamentos, Italínea Raja Móveis, La Veni Decor, Luminatto | Othon de Carvalho, Original Deccor, Raphael Rass, Thiago Tonelli, Varejão das Tintas | Suvinil.",
  },
  9: {
    src: "MMBH26-©Ivan Araújo (16).jpg",
    name: "Galeria Arco Abatido | Memórias de Minas",
    professional: "David Jabel & Arco Abatido Ateliê",
    contacts:
      '<span class="contact-person">David Jabel <a href="tel:+5531993549395">(31) 99354-9395</a></span><a href="mailto:davidjabel.arq@gmail.com">davidjabel.arq@gmail.com</a><a href="https://www.instagram.com/davidjabel.arq/" target="_blank" rel="noopener noreferrer">Instagram: @davidjabel.arq</a><span class="contact-heading">Arco Abatido Ateliê</span><a href="tel:+5531988126558">(31) 98812-6558</a><a href="https://www.instagram.com/arcoabatido/" target="_blank" rel="noopener noreferrer">Instagram: @arcoabatido</a>',
    concept:
      "<p>A Galeria Arco Abatido, no ambiente <em>Memórias de Minas</em>, traduz a essência da arquitetura mineira por meio de elementos afetivos, como a releitura das janelas coloniais, materiais naturais e o artesanato local. O espaço resgata memórias, tradições e o sentimento de pertencimento, revelando o aconchego característico do viver em Minas.</p>",
    partners:
      "Empório Vó Olívia, Falci Elétrica, Luminatto | Othon de Carvalho, Original Deccor, Varejão das Tintas | Suvinil.",
  },
  10: {
    src: "ambiente-10.jpg",
    name: "Quarto Entre Laços",
    professional: "DUALE ARQUITETURA",
    compactProfessional: true,
    contacts:
      '<span class="contact-person">Luiza Reis <a href="tel:+5535988787254">(35) 98878-7254</a></span><span class="contact-person">Beatriz Machado <a href="tel:+5531987586017">(31) 98758-6017</a></span><a href="mailto:duale.atendimento@gmail.com">duale.atendimento@gmail.com</a><a href="https://www.instagram.com/dualearquitetura/" target="_blank" rel="noopener noreferrer">Instagram: @dualearquitetura</a><a href="https://dualearquitetura.lovable.app/" target="_blank" rel="noopener noreferrer">dualearquitetura.lovable.app</a>',
    concept:
      "<p>O Quarto Entre Laços convida o visitante a reencontrar a delicadeza da infância. Inspirado na história da casa e em suas cores originais — azul-claro e bordô —, o ambiente traduz o cuidado, o acolhimento e a maternidade.</p><p>Mais do que um espaço infantil, o projeto demonstra que a arquitetura para crianças vai além da estética: desperta emoções, fortalece vínculos e transforma ambientes em lembranças afetivas.</p>",
    partners:
      "Arqué Móveis, Casa Singular Móveis, Criamobile, Daphine Santos Atelier, Falci Elétrica, Gamma Cortinas, Guia Decor, La Veni Decor, Luminatto | Othon de Carvalho, Mariana Tavares, SH Decor, Varejão das Tintas | Suvinil.",
  },
  11: {
    src: "ambiente-11.jpg",
    name: "Costurando Memórias",
    professional: "Natália Píramo & Vanessa Dutra",
    contacts:
      '<span class="contact-person">Natália Píramo <a href="tel:+5531992470886">(31) 99247-0886</a></span><a href="mailto:contato@nataliapiramo.com.br">contato@nataliapiramo.com.br</a><a href="https://www.instagram.com/nataliapiramo.interiores/" target="_blank" rel="noopener noreferrer">Instagram: @nataliapiramo.interiores</a><a href="https://www.nataliapiramo.com.br/" target="_blank" rel="noopener noreferrer">www.nataliapiramo.com.br</a><span class="contact-heading">Vanessa Dutra</span><a href="tel:+5531998846212">(31) 99884-6212</a><a href="https://www.instagram.com/vanessadutraarqbh/" target="_blank" rel="noopener noreferrer">Instagram: @vanessadutraarqbh</a><a href="mailto:vanessa.arquiteturabh@gmail.com">vanessa.arquiteturabh@gmail.com</a>',
    concept:
      "<p>Em homenagem a <strong>Suzanna Cortez de Paula</strong>, o ambiente inspira-se em sua paixão pela alta-costura para celebrar a delicadeza do fazer manual. Materiais ressignificados ganham novas funções, revelando a beleza da customização e do trabalho artesanal.</p><p>A proposta convida o visitante a refletir sobre as histórias que continuam sendo costuradas ao longo da vida, valorizando a memória, a criatividade e o afeto presentes em cada detalhe.</p>",
    partners:
      "Eucatex, Falci Elétrica, Gerais Elétrica, Juliana Mércia, La Veni Decor, Log Soluções Corporativas, Outlet.",
  },
  12: {
    src: "ambiente-12.jpg",
    name: "Entre Tempos",
    professional: "FLUIDA ARQUITETURA",
    contacts:
      '<span class="contact-person">Daniela Andrade <a href="tel:+5531998163539">(31) 99816-3539</a></span><span class="contact-person">Ashley Coimbra <a href="tel:+5531982143795">(31) 98214-3795</a></span><a href="mailto:fluidaarquitetura@gmail.com">fluidaarquitetura@gmail.com</a><a href="https://www.instagram.com/fluidaarquitetura/" target="_blank" rel="noopener noreferrer">Instagram: @fluidaarquitetura</a>',
    concept:
      "<p>Entre Tempos nasce do encontro entre a memória modernista e o desejo contemporâneo de desacelerar. A suíte master valoriza os rituais do cotidiano por meio da madeira, da iluminação indireta e de formas suaves, criando um refúgio intimista onde acolhimento, equilíbrio e bem-estar se encontram.</p><p>O ambiente convida o visitante a vivenciar um espaço de serenidade, no qual o tempo desacelera e o conforto se torna protagonista.</p>",
    partners:
      "Casa Singular Móveis, Criamobile, Falci Elétrica, Juliana Mércia, Original Deccor, Placas do Brasil, Varejão das Tintas | Suvinil.",
  },
  13: {
    src: "ambiente-13.jpg",
    name: "Varanda Bruma Curral",
    professional: "Thais Fontenelle",
    contacts:
      '<a href="tel:+5531987971418">(31) 98797-1418</a><a href="mailto:arquitethais@gmail.com">arquitethais@gmail.com</a><a href="https://www.instagram.com/arquitethais/" target="_blank" rel="noopener noreferrer">Instagram: @arquitethais</a>',
    concept:
      "<p>A Varanda Bruma Curral nasce do desejo de desacelerar o olhar. Seu nome evoca a névoa que envolve a Serra do Curral ao amanhecer, inspirando um ambiente de contemplação e serenidade.</p><p>Em uma casa tombada, onde o tempo dita o ritmo, o espaço se transforma em um refúgio acolhedor. A arquitetura atua como moldura para a paisagem, unindo a história do imóvel à leveza e à beleza natural de Minas Gerais.</p>",
    partners:
      "By Pinho, Casa Singular Móveis, Eucatex, Falci Elétrica, Gama Engenharia e Projetos, Mariana Tavares, Myrla Louredo, Um Quarto Interiores, Varejão das Tintas | Suvinil.",
  },
  14: {
    src: "ambiente-14.jpg",
    name: "Banheiro Público | Refúgio Diário",
    professional: "Débora Gomes Amorim",
    contacts:
      '<a href="tel:+5531989359624">(31) 98935-9624</a><a href="mailto:arquitetadamorim@gmail.com">arquitetadamorim@gmail.com</a><a href="https://www.instagram.com/arquitetadeboramorim/" target="_blank" rel="noopener noreferrer">Instagram: @arquitetadeboramorim</a><span>Facebook: Débora Amorim Arq</span>',
    concept:
      "<p>O Refúgio Diário nasceu do respeito pela história já presente no ambiente. A proposta transforma o espaço por meio de uma renovação acolhedora, valorizando texturas, detalhes sustentáveis e soluções que preservam sua essência.</p><p>Cada elemento foi pensado para unir funcionalidade, conforto e sensibilidade, abrindo caminho para que novas memórias sejam criadas e vividas.</p>",
    partners:
      "Eucatex, Falci Elétrica, Gama Engenharia e Projetos, Guia Decor, La Veni Decor, LGamalier Facility, Luminato | Othon de Carvalho, Original Deccor, Orrana Passos, Querê Home, Resoluto Store.",
  },
  15: {
    src: "ambiente-15.jpg",
    name: "Ateliê da Escritora",
    professional: "Estúdio Agave Arquitetura + Paisagismo",
    compactProfessional: true,
    contacts:
      '<span class="contact-person">Victor Lúcio <a href="tel:+5531984749607">(31) 98474-9607</a></span><a href="mailto:arquiteto.victor13@gmail.com">arquiteto.victor13@gmail.com</a><a href="https://www.instagram.com/victorlucioarquiteto/" target="_blank" rel="noopener noreferrer">Instagram: @victorlucioarquiteto</a><a href="https://www.agavearquitetura.com.br/" target="_blank" rel="noopener noreferrer">www.agavearquitetura.com.br</a>',
    concept:
      "<p>O Ateliê da Escritora foi concebido como um espaço de criação, leitura e reflexão. Inspirado na obra de Conceição Evaristo, o ambiente valoriza a literatura negra por meio da escolha de materiais brasileiros, como o Bege Bahia, o Quartzito Vermelho Xangô e a madeira, traduzindo ancestralidade, identidade, memória e acolhimento.</p><p>Cada elemento convida o visitante a vivenciar um espaço onde arquitetura e literatura se encontram, celebrando a força das histórias, da cultura e da criação.</p>",
    partners:
      "Casa Singular Móveis, Falci Elétrica, Fícus Rochas Ornamentais, Granvilla Acabamentos, Guia Decor, Juliana Mércia, La Veni Decor, Luminato | Othon de Carvalho, Original Deccor, Pinturas Original Express, Raphael Rass, Varejão das Tintas | Suvinil.",
  },
  16: {
    src: "ambiente-16.jpg",
    name: "O Jantar Eterno",
    professional: "Pavilhão 95 Arquitetura",
    contacts:
      '<span class="contact-person">Matheus Nery</span><span class="contact-person">Gabriel Fernandes</span><span class="contact-person">Sabrina Martins</span><a href="tel:+5531991342450">(31) 99134-2450</a><a href="mailto:contato@pavilhao95.com">contato@pavilhao95.com</a><a href="https://www.instagram.com/pavilhao95arquitetura/" target="_blank" rel="noopener noreferrer">Instagram: @pavilhao95arquitetura</a><a href="https://www.pavilhao95.com/" target="_blank" rel="noopener noreferrer">www.pavilhao95.com</a>',
    concept:
      "<p>O Jantar Eterno nasce das memórias de uma casa mineira. A escolha cuidadosa de cada detalhe constrói uma atmosfera onde a fluidez da matéria e a lembrança da casa de vó ganham uma releitura contemporânea.</p><p>Mais do que reviver momentos do passado, o ambiente propõe eternizá-los, transformando a memória afetiva em uma experiência acolhedora, sensível e atemporal.</p>",
    partners:
      "Falci Elétrica, Gamma Cortinas, Kálamo, La Veni Decor, Luminato | Othon de Carvalho, Marrocos Interiores, Portal Mármores e Granitos, Portobello Shop, Thiago Tonielli, Varejão das Tintas | Suvinil.",
  },
  17: {
    src: "ambiente-17.jpg",
    name: "Loja Querê Home | Memórias à Mesa",
    professional: "Fabiana Metzker",
    contacts:
      '<a href="tel:+5531995920822">(31) 99592-0822</a><a href="mailto:oi@querehome.com">oi@querehome.com</a><a href="https://www.instagram.com/quere.home/" target="_blank" rel="noopener noreferrer">Instagram: @quere.home</a><a href="https://www.instagram.com/_enceno/" target="_blank" rel="noopener noreferrer">Instagram: @_enceno</a><span>Facebook: Enceno Arquitetura e Cenografia</span><a href="https://www.querehome.com/" target="_blank" rel="noopener noreferrer">www.querehome.com</a>',
    concept:
      '<p>Memórias à Mesa celebra a copa como o coração da casa: o lugar onde o café é passado, as conversas acontecem e o jeito mineiro de receber ganha vida. Inspirado na essência da Querê Home e no significado do "querê" mineiro, o ambiente transforma esse espaço em um convite ao afeto, aos encontros e ao pertencimento.</p><p>Aromas despertam lembranças, objetos contam histórias e cada detalhe valoriza os momentos compartilhados ao redor da mesa. As peças produzidas artesanalmente pela marca expressam identidade, cuidado e significado, reforçando a conexão entre tradição e memória.</p><p>Em sintonia com o propósito da Casa Cortez de Paula, Memórias à Mesa convida o visitante a desacelerar, compartilhar e celebrar o prazer de receber. Afinal, é ao redor da mesa que as memórias são construídas e o querer bem atravessa gerações.</p>',
    partners:
      "Eucatex, Falci Elétrica, Gerais Elétrica, Marisa Paisagismos, Marrocos Interiores, Original Deccor, Resoluto Store, Varejão das Tintas | Suvinil.",
  },
  18: {
    src: "ambiente-18.jpg",
    name: "Coração da Casa",
    professional: "Lazú Arquitetura | Marina Roman",
    compactProfessional: true,
    contacts:
      '<a href="tel:+5531997780533">(31) 99778-0533</a><a href="mailto:marina@lazurearquitetura.com">marina@lazurearquitetura.com</a><a href="https://www.instagram.com/lazuarquitetura/" target="_blank" rel="noopener noreferrer">Instagram: @lazuarquitetura</a><a href="https://www.lazurearquitetura.com/" target="_blank" rel="noopener noreferrer">www.lazurearquitetura.com</a>',
    concept:
      "<p>Mais do que um espaço para preparar alimentos, a cozinha representa o Coração da Casa. Inspirado na brasilidade e nas memórias afetivas construídas ao redor da mesa, o ambiente celebra os rituais cotidianos que preservam histórias, fortalecem vínculos e mantêm viva a identidade cultural brasileira. Cada detalhe carrega um fragmento da nossa história.</p>",
    partners:
      "ABC da Construção — Senhora do Carmo, Cook Eletroraro, Criamobile, Daphine Santos Atelier, Eucatex, Falci Elétrica, Gama Engenharia e Projetos, LGamalier Facility, Luminato | Othon de Carvalho, Marrocos Interiores, Orrana Passos, Portal Mármores e Granitos, Rico Maciel, Varejão das Tintas | Suvinil.",
  },
  19: {
    src: "ambiente-19.jpg",
    name: "Banheiro Público | Alma Natural",
    professional: "Karine Mayrink",
    contacts:
      '<a href="tel:+5531991840566">(31) 99184-0566</a><a href="mailto:karine@karinemayrink.com.br">karine@karinemayrink.com.br</a><a href="https://www.instagram.com/karinemayrink.arquitetura/" target="_blank" rel="noopener noreferrer">Instagram: @karinemayrink.arquitetura</a><span>Facebook: karinemayrink.arq</span><a href="https://www.karinemayrink.com.br/" target="_blank" rel="noopener noreferrer">www.karinemayrink.com.br</a>',
    concept:
      "<p>O Banheiro Público Alma Natural traduz acolhimento, inspiração na natureza e respeito pela história da casa. A preservação do piso vermelho original reforça o compromisso com a sustentabilidade e cria um contraste marcante com os tons de verde das paredes, conferindo personalidade ao ambiente.</p><p>Na bancada, o quartzito nacional valoriza a brasilidade do projeto e destaca a cuba de design singular. O armário alto planejado completa a composição, unindo elegância, funcionalidade e soluções que transformam o espaço em um ambiente acolhedor e atemporal.</p>",
    partners:
      "ABC da Construção — Senhora do Carmo, Arqué Móveis, Costa Engenharia | Mova Engenharia, Dicas & Alegrias, Eucatex, Fagundes Efeitos Decorativos, Falci Elétrica, Gala Móveis, La Veni Decor, Portal Mármores e Granitos, Varejão das Tintas | Suvinil.",
  },
  20: {
    src: "ambiente-20.jpg",
    name: "Minas Moda Autoral | Sebrae",
    professional: "Escritório Fundamentar",
    contacts:
      '<span class="contact-person">Isabella Braga</span><span class="contact-person">Danilo Pimenta</span><a href="tel:+5531983798383">(31) 98379-8383</a><a href="mailto:fundamentar@outlook.com">fundamentar@outlook.com</a><a href="https://www.instagram.com/escritorio.fundamentar/" target="_blank" rel="noopener noreferrer">Instagram: @escritorio.fundamentar</a>',
    concept:
      "<p>O Minas Moda Autoral | Sebrae celebra a riqueza do feito à mão em uma vitrine contemporânea que valoriza a criatividade, os saberes e a identidade mineira. Cores, texturas e soluções desenvolvidas especialmente para o espaço transformam o ambiente em uma experiência que une design, tradição e inovação.</p><p>Cada detalhe evidencia a força da produção autoral, destacando marcas que preservam técnicas artesanais e traduzem história, cuidado e autenticidade em suas criações.</p>",
    partners:
      "Ananda Sant’Anna, Azelha Ateliê, By Pinho, Classic Móveis, Dicas & Alegrias, Falci Elétrica, Guia Decor, La Veni Decor, LGamalier Facility, Luminato | Othon de Carvalho, Myrla Louredo, Original Deccor, Pinturas Original Express, Portobello Shop, Varejão das Tintas | Suvinil.<br><br><strong>Marcas Parceiras — Minas Moda Autoral | Sebrae:</strong> Almenara Têxtil (@almenaratextil), Clara Lau Joias (@claralaujoias), Jac Design (@jacdesignacessorios), Petiá (@petiabrasil), Priscilla Antunes (@priscillaantunes.acessorios) e Retrama (@re.trama).",
  },
  21: {
    src: "ambiente-21.jpg",
    name: "Bar Raízes & Aço | Natureza e Matéria em Equilíbrio",
    professional: "RMA Arquitetura + Bernardino Engenharia",
    compactProfessional: true,
    contacts:
      '<span class="contact-person">Rafaela Maia <a href="tel:+5531999422774">(31) 99942-2774</a></span><a href="mailto:contato@rmaarquitetura.com">contato@rmaarquitetura.com</a><a href="https://www.instagram.com/arquitetura.rma/" target="_blank" rel="noopener noreferrer">Instagram: @arquitetura.rma</a><a href="https://www.rmaarquitetura.com/" target="_blank" rel="noopener noreferrer">www.rmaarquitetura.com</a><span class="contact-heading">Bernardino Engenharia | Jônathas Alves</span><a href="tel:+5537999396495">(37) 99939-6495</a><a href="mailto:bernardinoengenharia@gmail.com">bernardinoengenharia@gmail.com</a><a href="https://www.instagram.com/bernardinoeng/" target="_blank" rel="noopener noreferrer">Instagram: @bernardinoeng</a>',
    concept:
      "<p>O Bar Raízes & Aço traduz o equilíbrio entre natureza e arquitetura. As raízes simbolizam a memória, a essência e a conexão com o lugar, enquanto o aço representa a estrutura, a inovação e o futuro.</p><p>O ambiente ressignifica materiais e valoriza o potencial do que já existia, transformando recursos em novas possibilidades. A proposta evidencia que tradição e contemporaneidade podem coexistir em perfeita harmonia.</p>",
    partners:
      "Ananda Sant’Anna, Azelha Ateliê, Bernardino Engenharia, By Pinho, Classic Móveis, Falci Elétrica, Fícus Rochas Ornamentais, Granvilla Acabamentos, LGamalier Facility, Luminato | Othon de Carvalho, Metálica Serralheria Design, TecnoDry, Varejão das Tintas | Suvinil.",
  },
  22: {
    src: "ambiente-22.jpg",
    name: "ESTAÇÃO DAS GERAIS",
    professional: "Magda Vaccari",
    contacts:
      '<a href="tel:+5531991059642">(31) 99105-9642</a><a href="mailto:magdamyavaccari@gmail.com">magdamyavaccari@gmail.com</a><a href="https://www.instagram.com/vaccarimagda/" target="_blank" rel="noopener noreferrer">Instagram: @vaccarimagda</a>',
    concept:
      "<p>A Estação das Gerais ocupa o jardim de uma casa modernista dos anos 1950 para celebrar a convivência. O ambiente reúne brasilidade, alta gastronomia e inovação tecnológica em uma proposta que valoriza o encontro, a hospitalidade e o jeito mineiro de receber.</p><p>Com soluções sustentáveis, acessibilidade universal e elementos personalizados, o espaço traduz acolhimento, funcionalidade e afeto, criando uma experiência que conecta tradição e contemporaneidade.</p>",
    partners:
      "By Pinho, Casa Verde Paisagismo, Classic Móveis, Ecometal.BH — Serralheria Criativa, Falci Elétrica, Gerais Elétrica, LGamalier Facility, Pinturas Original Express, Resoluto Store by Dan Rockers, SH Decor, Varejão das Tintas | Suvinil.",
  },
  23: {
    src: "ambiente-23.jpg",
    name: "Raízes",
    professional: "Daniela Gazzinelli & Mariana Martins",
    compactProfessional: true,
    contacts:
      '<span class="contact-person">Daniela Gazzinelli <a href="tel:+5533999630206">(33) 99963-0206</a></span><a href="mailto:gazzinellidaniela@gmail.com">gazzinellidaniela@gmail.com</a><a href="https://www.instagram.com/danielagazzinelli/" target="_blank" rel="noopener noreferrer">Instagram: @danielagazzinelli</a><span class="contact-heading">Mariana Martins</span><a href="tel:+5534992260274">(34) 99226-0274</a><a href="mailto:marianam.paisart@gmail.com">marianam.paisart@gmail.com</a><a href="https://www.instagram.com/paisart._/" target="_blank" rel="noopener noreferrer">Instagram: @paisart._</a>',
    concept:
      "<p>Inspirado na essência de Minas Gerais, Raízes nasce da releitura da arquitetura vernacular em uma linguagem contemporânea. O ambiente valoriza a memória, a identidade e os saberes locais por meio de materiais naturais e peças desenvolvidas especialmente para o projeto.</p><p>A proposta ressignifica tradições e convida o visitante a um novo olhar sobre as raízes mineiras, unindo autenticidade, acolhimento e contemporaneidade.</p>",
    partners:
      "Ananda Sant’Anna, By Pinho Atelier Arte Design, Classic Móveis, Dicas & Alegrias, Ecometal.BH — Serralheria Criativa, Empório Vó Olívia, Fagundes Efeitos Decorativos, Falci Elétrica, Gama Engenharia e Projetos, Gerais Elétrica, La Veni Decor, LGamalier Facility, Mariana Martins, Marrocos Interiores, Varejão das Tintas | Suvinil.",
  },
  24: {
    src: "ambiente-24.jpg",
    name: "Ateliê Kokedama | Casa Verde Paisagismo",
    professional: "Marisa Vieira Barbosa",
    contacts:
      '<a href="tel:+5531988421328">(31) 98842-1328</a><a href="mailto:marisavieirab@gmail.com">marisavieirab@gmail.com</a><a href="https://www.instagram.com/casaverdearq.paisagismo/" target="_blank" rel="noopener noreferrer">Instagram: @casaverdearq.paisagismo</a><span>Facebook: Marisa Vieira Barbosa</span>',
    concept:
      "<p>O Ateliê Kokedama, assinado pela Casa Verde Paisagismo, celebra a sustentabilidade, a customização e o bem viver. Sob a curadoria da arquiteta paisagista Marisa Vieira, o espaço apresenta as kokedamas como peças vivas que unem natureza, design e criatividade.</p><p>Em sintonia com os conceitos da Morar Mais BH, o ambiente convida o visitante a descobrir novas formas de integrar o verde ao cotidiano, valorizando a beleza natural e o cuidado com o meio ambiente.</p>",
    partners: "Casa Verde Paisagismo, Falci Elétrica.",
  },
};
const lightboxImage = document.querySelector("#lightboxImage"),
  lightboxNumber = document.querySelector("#lightboxNumber"),
  lightboxTitle = document.querySelector("#lightboxTitle"),
  lightboxProfessional = document.querySelector("#lightboxProfessional"),
  lightboxConcept = document.querySelector("#lightboxConcept"),
  lightboxPartners = document.querySelector("#lightboxPartners"),
  lightboxCredit = document.querySelector("#lightboxCredit");
const mapinCredit = document.querySelector(".creator-credit");
const guideHeader = document.querySelector(".guide-header");
if (mapinCredit && guideHeader)
  guideHeader.insertAdjacentElement("afterend", mapinCredit);
let selected = 1;
const mapLayout = [
  [1, 1, 2, 1],
  [3, 1, 1, 1],
  [4, 1, 2, 1],
  [6, 1, 3, 1],
  [1, 2, 1, 1],
  [2, 2, 2, 1],
  [4, 2, 1, 1],
  [5, 2, 2, 1],
  [7, 2, 2, 1],
  [1, 3, 2, 1],
  [3, 3, 1, 1],
  [4, 3, 2, 1],
  [6, 3, 1, 1],
  [7, 3, 2, 1],
  [1, 4, 1, 1],
  [2, 4, 2, 1],
  [4, 4, 1, 1],
  [5, 4, 2, 1],
  [7, 4, 2, 1],
  [1, 5, 2, 1],
  [3, 5, 1, 1],
  [4, 5, 2, 1],
  [6, 5, 1, 1],
  [7, 5, 2, 1],
];
function floorClass(floor) {
  return floor === "Subsolo"
    ? "floor-subsolo"
    : floor === "1º Pavimento"
      ? "floor-primeiro"
      : "floor-segundo";
}
function selectRoom(number) {
  const room = ambientes.find((item) => item[0] === number);
  if (!room) return;
  selected = number;
  selectedNumber.textContent = String(room[0]).padStart(2, "0");
  selectedName.textContent = room[1];
  selectedFloor.textContent = room[2];
  const photo = photoData[number];
  if (selectedPhoto) selectedPhoto.hidden = !photo;
  if (photo) {
    const alt = `${photo.name} — Morar Mais Belo Horizonte 2026`;
    selectedImage.src = photo.src;
    selectedImage.alt = alt;
    selectedPhoto.setAttribute(
      "aria-label",
      `Ampliar foto de ${photo.name}`,
    );
    lightboxImage.src = photo.src;
    lightboxImage.alt = alt;
    lightboxNumber.textContent = `Ambiente ${String(number).padStart(2, "0")}`;
    lightboxTitle.textContent = photo.name;
    lightboxProfessional.hidden = !photo.professional;
    lightboxProfessional.classList.toggle(
      "compact",
      photo.compactProfessional === true,
    );
    lightboxConcept.hidden = !photo.concept;
    lightboxPartners.hidden = !photo.partners;
    lightboxCredit.hidden = photo.credit === false;
    if (photo.professional) {
      lightboxProfessional.querySelector("strong").textContent =
        photo.professional;
      lightboxProfessional.querySelector(".lightbox-contact").innerHTML =
        photo.contacts || "";
    }
    if (photo.concept) lightboxConcept.innerHTML = photo.concept;
    if (photo.partners)
      lightboxPartners.innerHTML = `<strong>Parceiros:</strong> ${photo.partners}`;
  }
  document.querySelectorAll("[data-room]").forEach((item) => {
    const active = Number(item.dataset.room) === number;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", active);
  });
  const detail = document.querySelector(".map-detail");
  if (detail) {
    detail.classList.remove("is-updating");
    requestAnimationFrame(() => detail.classList.add("is-updating"));
  }
}
function render(floor) {
  const list =
    floor === "Todos"
      ? ambientes
      : ambientes.filter((item) => item[2] === floor);
  if (!list.some((item) => item[0] === selected)) selected = list[0]?.[0];
  count.textContent = `${list.length} ambiente${list.length !== 1 ? "s" : ""}`;
  mapMarkers.innerHTML = ambientes
    .map(([number, name, roomFloor]) => {
      const [x, y, w, h] = mapLayout[number - 1];
      const muted = floor !== "Todos" && roomFloor !== floor;
      return `<button class="map-room ${floorClass(roomFloor)}${muted ? " is-muted" : ""}" type="button" data-room="${number}" data-name="${name}" style="--x:${x};--y:${y};--w:${w};--h:${h}" aria-label="Ambiente ${number}: ${name}${muted ? ` — ${roomFloor}, fora do filtro atual` : ""}"${muted ? " disabled" : ""}>${String(number).padStart(2, "0")}</button>`;
    })
    .join("");
  rooms.innerHTML = list.length
    ? list
        .map(
          ([number, name, roomFloor]) =>
            `<button class="room ${floorClass(roomFloor)}" type="button" data-room="${number}"><span class="room-num">${String(number).padStart(2, "0")}</span><h3>${name}</h3><p>${roomFloor}</p></button>`,
        )
        .join("")
    : '<div class="empty">Nenhum ambiente encontrado.</div>';
  selectRoom(selected);
}
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-room]");
  if (target) selectRoom(Number(target.dataset.room));
});
const video = document.querySelector(".video-feature video");
const locationLabel = document.querySelector("header>span");
if (locationLabel) locationLabel.textContent = "Belo Horizonte - 2026";
document
  .querySelectorAll(".video-caption,footer span:first-child")
  .forEach(
    (item) => (item.textContent = "Morar Mais Belo Horizonte - 2026"),
  );
const videoCredit = document.querySelector(".video-credit");
if (videoCredit)
  videoCredit.innerHTML =
    'Feito por <strong>Estéfano</strong> · Instagram <a href="https://www.instagram.com/euestefano/" target="_blank" rel="noopener noreferrer">@euestefano</a>';
if (video) {
  video.addEventListener("error", () =>
    video.closest(".video-feature").classList.add("has-error"),
  );
  video.muted = true;
  const startVideo = () => {
    const playback = video.play();
    if (playback && typeof playback.catch === "function")
      playback.catch(() => {});
  };
  if (video.readyState >= 2) startVideo();
  else video.addEventListener("canplay", startVideo, { once: true });
}
const lightbox = document.querySelector("#photoLightbox"),
  lightboxClose = lightbox?.querySelector(".lightbox-close");
function toggleLightbox(open) {
  if (!lightbox) return;
  lightbox.classList.toggle("is-open", open);
  document.body.classList.toggle("lightbox-open", open);
  lightbox.setAttribute("aria-hidden", String(!open));
  if (open) lightboxClose?.focus();
  else selectedPhoto?.focus();
}
selectedPhoto?.addEventListener("click", () => toggleLightbox(true));
lightboxClose?.addEventListener("click", () => toggleLightbox(false));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) toggleLightbox(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open"))
    toggleLightbox(false);
});
document.querySelectorAll("[data-floor]").forEach((button) =>
  {
    button.setAttribute(
      "aria-pressed",
      String(button.classList.contains("active")),
    );
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-floor]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      render(button.dataset.floor);
    });
  },
);
render("Todos");
const revealItems = document.querySelectorAll(
  ".video-feature,.details,.history,.guide-header,.filter,.map-explorer,.rooms",
);
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  revealItems.forEach((item) => item.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08, rootMargin: "0px 0px -35px" },
  );
  revealItems.forEach((item) => observer.observe(item));
}
