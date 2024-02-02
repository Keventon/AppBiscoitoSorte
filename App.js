import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [textoFrase, setTextoFrase] = useState();
  const [image, setImage] = useState(require('./src/assets/biscoito.png'));

  const abriFrase = () => {
    let numeroAleatorio = Math.floor(Math.random() * frasesBiscoito.length);
    setTextoFrase(frasesBiscoito[numeroAleatorio]);
    setImage(require('./src/assets/biscoitoAberto.png'));
  };

  const frasesBiscoito = [
    'A sorte favorece os corajosos.',
    'Grandes oportunidades surgem de pequenas ações.',
    'Acredite no poder dos seus sonhos.',
    'A paciência é a chave para o sucesso.',
    'O amor é a resposta para todas as perguntas.',
    'Seja a mudança que você deseja ver no mundo.',
    'A felicidade está nas pequenas coisas da vida.',
    'A persistência supera a resistência.',
    'Aprenda com o passado, viva no presente, planeje para o futuro.',
    'O sucesso é uma jornada, não um destino.',
    'O otimismo é a melhor maneira de enxergar a vida.',
    'Acredite no impossível e conquiste o inimaginável.',
    'A generosidade atrai boas energias.',
    'A vida é feita de escolhas; faça escolhas sábias.',
    'A harmonia está em equilibrar mente, corpo e espírito.',
    'Seja grato pelo que tem e mais virá.',
    'A sabedoria começa na admiração.',
    'Seja gentil, pois todo ato de bondade conta.',
    'A verdadeira riqueza está na paz interior.',
    'O sucesso começa com uma atitude positiva.',
    'A sorte sorri para quem trabalha duro.',
    'O aprendizado é uma jornada que nunca termina.',
    'A persistência leva à excelência.',
    'Seja a luz que guia seu próprio caminho.',
    'Sua jornada é única, celebre suas conquistas.',
    'Aprenda com os erros e cresça com os desafios.',
    'A esperança é a luz que guia na escuridão.',
    'A confiança é a base de todos os relacionamentos.',
    'A felicidade está em aceitar a vida como ela é.',
    'O tempo é precioso, use-o sabiamente.',
    'A gratidão transforma o comum em extraordinário.',
    'Aprenda a apreciar o silêncio.',
    'A verdadeira beleza vem de dentro.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'A autenticidade é a chave para relacionamentos significativos.',
    'Acredite na magia dos recomeços.',
    'A simplicidade é a sofisticação máxima.',
    'A sorte acompanha quem planta boas sementes.',
    'A vida é curta; aproveite cada momento.',
    'Seja gentil consigo mesmo, você merece.',
    'O amor cura todas as feridas.',
    'O otimismo é a luz que ilumina o caminho.',
    'Celebre as pequenas vitórias da vida.',
    'A humildade é a marca dos verdadeiramente grandes.',
    'O respeito é a base de qualquer relacionamento saudável.',
    'A paciência é a chave para superar desafios.',
    'O sucesso começa com autoconhecimento.',
    'A sabedoria está em aprender com os erros dos outros.',
    'O verdadeiro poder está em ajudar os outros.',
    'A vida é uma aventura; aproveite a jornada.',
  ];

  return (
    <View style={styled.container}>
      <Image source={image} style={styled.image} />
      <Text style={styled.text}>{textoFrase}</Text>
      <TouchableOpacity style={styled.button} onPress={abriFrase}>
        <View style={styled.buttonArea}>
          <Text style={styled.buttonText}>Abrir biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 16,
    fontSize: 20,
    padding: 10,
  },
  text: {
    fontSize: 25,
    color: '#dd7b22',
    fontWeight: '500',
    margin: 32,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    backgroundColor: '#dd7b22',
    borderRadius: 8,
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
