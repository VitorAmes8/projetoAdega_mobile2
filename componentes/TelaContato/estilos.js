import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  titulo: {
   fontSize: 24,
   fontWeight: 'bold',
  },

  contatoLista: {
  },

  contatoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    minHeight: 150,
    border: '1px solid',
    borderRadius: 20,
    backgroundColor: '#FFF',
  },

  contatoTitulo: {
    color: '#400303',
    fontSize: 20,
    fontWeight: 'bold',
  },

  contatoParagrafo: {
    marginTop: 5,
    color: '#400303',
    fontSize: 16,
    fontWeight: '700',
  },
  
});

export default estilos;