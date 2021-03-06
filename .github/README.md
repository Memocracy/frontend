<img src="Logo_memocracy.svg" width="200">

# Frontend

Frontend for Memocracy project.

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Gatsby](https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white) ![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Deploy

This repository can be deployed from a developers computer or by using workflow.

### External repository dispatch:

```
curl -X POST \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token [token]" \
    --data '{"event_type": "[publish-prod|publish-dev]"}' \
    https://api.github.com/repos/Memocracy/frontend/dispatches
```

### Local deployment

```
npm run deploy:development
```

## Adding new types of content

Check [official docs](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/building-a-new-site-wordpress-and-gatsby.md). 


## Component design pattern

This project uses [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/).

![Atomic Design](instagram-atomic.png)

## Additional notes

* Please remember to run `gatsby clean` before switching `npm run develop` and `npm run develop:public` 😅

* If Gatsby is not refreshing SCSS modules please save any JS file. It should start working! 

## TODO

* Replace deployment workflow to [this](https://github.com/marketplace/actions/deploy-gatsby-to-aws-s3)

---

**Project info**

## The Challenge of Populist Memory Politics for Europe: Towards Effective Responses to Militant Legislation on the Past (MEMOCRACY)

The proliferation of memory laws and policies in Central and Eastern Europe (CEE) has instigated a contemporary culture war in Europe, a clash concerning the meaning of the past for present European identities. The project addresses this democratic dilemma, and the related legal and political challenges in contemporary Europe. The term 'memocracy', coined for the purposes of this study, means 'ruling on the basis of memory'. The research approach is trans-disciplinary and aims at knowledge integration across comparative constitutionalism, socio-legal studies, critical legal studies, international relations scholarship, and CEE area studies.The contribution of the project will lie in the unfolding of the nexus between the erosion of fundamental democratic rights and the emerging nation-centric governance of memory in CEE. The project has three objectives: 1) To develop an analytical framework for studying the migration and distortion of constitutional concepts in Europe. 2) To conduct qualitative case studies of the memory laws and policies in Germany and seven CEE states over the past decade, on the one hand, and democratic standards in the EU and the CoE, on the other hand. 3) To contribute to current public debates about the future of liberal democracy by providing new scholarly insights on the parameters of democratic memory governance in the transnational European space. The team consists of researchers from the fields of comparative law, constitutional law and international politics. The main outputs of this collaboration will be thematic workshops with stakeholder engagement, academic publications, and a website, showcasing comprehensive policy briefs about memory laws, judgments and policies in the reviewed countries.

---

<a href="https://www.volkswagenstiftung.de/en"><img src="VWST_W_PNG.png" alt="The Volkswagen Foundation" width="200"></a>