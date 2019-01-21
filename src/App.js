import React, { Component } from 'react';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super()
    this.state = {
      siswa : [
        {id: 1, nama: 'Fickry Bil Iman', kelas: '7A'},
        {id: 2, nama: 'Keanu Reeves', kelas: '8B'},
        {id: 3, nama: 'Dian Sastro', kelas: '3C'},
      ],
      judul : 'Hello World !'
    }
  }

  // Ketika method render berhasil dijalankan
  componentDidMount() {
    // alert('Render sudah berhasil jalan')
  }

  // Ketika ada perubahan state atau props
  componentDidUpdate() {
    // alert('ada perubahan di state judul')
  }

  // Ketika component akan di hapus / di tiadakan
  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>List Data Siswa</h1>
        <Table 
          siswa = { this.state.siswa } 
          judulBaru = {this.state.judul }
        />
        <button onClick = {() => this.setState({ judul : this.state.judul + '!' })}>Click ME!</button>
      </div>
    )
  }
}

export default App;
