import { ProductCard } from '../../components/cards/ProductCard';


const products = [
  { name: 'Nike Falop A', image: 'https://i.pinimg.com/originals/46/6d/bd/466dbd795e083d3b58aded391aa1074e.jpg' },
  { name: 'Nike Air Force 1 Low', image: 'https://i.pinimg.com/originals/c2/87/1e/c2871e22dc7073f60bac8fc021e87278.jpg' },
  { name: 'Air Jordan 1 Low', image: 'https://i.pinimg.com/originals/e7/4a/70/e74a704bdca1ff65c00bb732cd330619.jpg' },
  { name: 'Nike Air Force 1 Low', image: 'https://i.pinimg.com/originals/94/ee/72/94ee722a945bfa6a17eb229fddbed94f.jpg' },
  { name: 'Adidas Yeeze', image: 'https://i.pinimg.com/originals/9c/cf/04/9ccf042c1e06a3c292095d6e017b4386.jpg' },
  { name: 'Nike Air Force 1 Low', image: 'https://i.pinimg.com/1200x/b0/0f/f1/b00ff1ed5ed711f4c426351120e0a1af.jpg' },
  { name: 'Nike Air Force 1', image: 'https://i.pinimg.com/originals/63/97/86/6397864f8272f9cc5e2e9bf313ce9abb.jpg' },
  { name: 'Nike Mand Anga', image: 'https://i.pinimg.com/originals/f9/5f/5f/f95f5feb480219680545d897746f5c73.png' },
  { name: 'Nike Air Force 1', image: 'https://i.pinimg.com/originals/ac/b7/20/acb720813960a03967441d826dfebc97.jpg' },
  { name: 'Nike Air Force 1', image: 'https://i.pinimg.com/originals/f4/c4/54/f4c454642594e75a1b43d909b947c1f6.jpg' },
  { name: 'Fila', image: 'https://i.pinimg.com/originals/90/e3/0b/90e30be9a1acb7a432cb3fc4968f3af2.png' },
  { name: 'Nike Falop A', image: 'https://i.pinimg.com/originals/46/6d/bd/466dbd795e083d3b58aded391aa1074e.jpg' },
  { name: 'Nike Air Force', image: 'https://i.pinimg.com/originals/c2/87/1e/c2871e22dc7073f60bac8fc021e87278.jpg' },
  { name: 'Air Jordan 1', image: 'https://i.pinimg.com/originals/e7/4a/70/e74a704bdca1ff65c00bb732cd330619.jpg' },
  { name: 'Nike Air Force', image: 'https://i.pinimg.com/originals/94/ee/72/94ee722a945bfa6a17eb229fddbed94f.jpg' },
  { name: 'Adidas Yeeze', image: 'https://i.pinimg.com/originals/9c/cf/04/9ccf042c1e06a3c292095d6e017b4386.jpg' },
  { name: 'Nike Air Force', image: 'https://i.pinimg.com/1200x/b0/0f/f1/b00ff1ed5ed711f4c426351120e0a1af.jpg' },
  { name: 'Nike Air Force', image: 'https://i.pinimg.com/originals/63/97/86/6397864f8272f9cc5e2e9bf313ce9abb.jpg' },
  { name: 'Nike Mand Anga', image: 'https://i.pinimg.com/originals/f9/5f/5f/f95f5feb480219680545d897746f5c73.png' },
  { name: 'Nike Air Force', image: 'https://i.pinimg.com/originals/ac/b7/20/acb720813960a03967441d826dfebc97.jpg' }
]
export default () => {
  return (
    <main>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product,i) => (<ProductCard key={i} name={product.name} imageUrl={product.image} />))}
      </div>
    </main>
  )
}
