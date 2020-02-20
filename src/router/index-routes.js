export default (Router) => {

  Router.get('/', (req, res ,next) => {
    res.json({ index: true })
  });
}