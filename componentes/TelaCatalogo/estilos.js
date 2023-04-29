import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerScroll: {
  },

  titulo: {
   fontSize: 36,
   marginTop: 10,
   marginLeft: 15,
   fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: '500',
  },

  cardVinho: {
    flexDirection: 'row',
    margin: 15,
    minHeight: 150,
    border: '0px solid',
    borderRadius: 20,
    backgroundColor: '#B08A7F',
  },

  vinhoImg: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 20,
    width: '10%',
    height: '85%',
  },

  cardBoxDescricao: {
    flex: 1,
  },

  cardTitulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  cardDescricao: {
    marginTop: 25,
    marginBottom: 15,
    color: 'white',
    fontSize: 16,
  },
  
});

export default estilos;