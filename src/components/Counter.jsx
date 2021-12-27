import { useState } from 'react'
//hook -> useState

export function Counter() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

// let = let it change

// Mutação - altera a memória
// usuarios = ['la01', 'la02', 'la03']
// usuarios.push('la04')
// usuarios = ['la01', 'la02', 'la03','la04']

// imutabilidade - cria um espaço na memória com as informações já salvas = melhor performance do React
// usuarios = ['la01', 'la02', 'la03']
// novoUsuarios = [...usuarios, 'la04']
