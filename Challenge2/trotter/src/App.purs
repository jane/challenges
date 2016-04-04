module App where

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Exception (EXCEPTION)
import DOM (DOM)
import Signal.Channel (CHANNEL)
import Prelude
import Pux (App, start, fromSimple, renderToDOM)
import App.Dice (State, Action, update, view)

type AppEffects eff = (err :: EXCEPTION, channel :: CHANNEL | eff)

main :: State -> Eff (AppEffects (dom :: DOM)) (App State Action)
main state = do
  app <- start
    { initialState: state
    , update: fromSimple update
    , view: view
    , inputs: []
    }
  renderToDOM "#app" app.html
  return app
