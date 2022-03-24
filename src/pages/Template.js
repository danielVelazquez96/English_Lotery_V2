// Componentes
import ReloadCard from '../components/ReloadCard/ReloadCard'
import ShowCards from '../components/ShowCards/ShowCards'

function Template({data}) {
  return (
    <div>
        <ReloadCard cards={data} />
        <ShowCards cards={data} />
    </div>
        
  )
}

export default Template