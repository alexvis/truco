import GameTable from '../../src/containers/GameTable'

describe('GameTable', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <GameTable
      />
    )
  })

  it('should render a GameTable component', () => {
    wrapper.setState({
      game: 'Hello from GameTable'
    })
    expect(wrapper.find(GameTable)).toBePresent()
  })
})
