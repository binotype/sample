import { model } from "../src/model"

export const about: model.Site.Page = (await model.Site.Page.parse(`
title = "About"

I am Simon Mika, and I create things. Professionally I create software products. Either hands on or by creating the organization that builds the products.

I live in Uppsala, Sweden with my wife Sannah and my four kids in a house from 1937 that we have been renovating since 2009.

I write about building software and building companies.

Currently, I help companies as a consultant with everything from software architecture to business development. If you are interested in my services please [contact me](../contact). When I don't work for money I also spend time on [SysPL](https://github.com/syspl/syspl) and [TypeUp](https://github.com/cogneco/typeup).

You can find out more about me on my page on [LinkedIn](https://se.linkedin.com/in/simonmika) and on [GitHub](https://github.com/simonmika).
`))!
