module.exports = {
  title: "Wasabi Documentation",
  description: "Wasabi is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.",
  base: "/WasabiDoc/",
  themeConfig: {
    logo: "/Logo_without_text.png",
    displayAllHeaders: false,
    sidebarDepth: 0,
    repo: "zkSNACKs/WasabiDoc",
    docsDir: "docs",
    editLinks: true,
    sidebar: {
      "/why-wasabi/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/why-wasabi/",
            "/why-wasabi/WhyPrivacyImportant.md",
            "/why-wasabi/BitcoinPrivacy.md",
            "/why-wasabi/10Commandments.md"
          ]
        }
      ],
      "/using-wasabi/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/using-wasabi/",
            "/using-wasabi/InstallPackage.md",
            "/using-wasabi/BuildSource.md",
            "/using-wasabi/DeterministicBuild.md",
            "/using-wasabi/ClientDeployment.md",
            "/using-wasabi/BIP.md",
            "/using-wasabi/PasswordFinder.md",
            "/using-wasabi/PayToEndPoint.md"
          ]
        }
      ],
      "/building-wasabi/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/building-wasabi/",
            "/building-wasabi/TechnicalOverview.md",
            "/building-wasabi/ContributionChecklist.md",
            "/building-wasabi/Dojo.md",
            "/building-wasabi/ToDo.md",
            "/building-wasabi/CodingConventions.md",
            "/building-wasabi/DemoGuide.md",
            "/building-wasabi/ContributionGame.md",
            "/building-wasabi/Security.md",
            "/building-wasabi/CodeCoverage.md",
            "/building-wasabi/ManualTesting.md",
            "/building-wasabi/HardwareWalletTestingGuide.md",
            "/building-wasabi/HowToDebug.md",
            "/building-wasabi/Ports.md"
          ]
        }
      ],
      "/FAQ/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/FAQ/",
            "/FAQ/FAQ-Introduction.md",
            "/FAQ/FAQ-Installation.md",
            "/FAQ/FAQ-UseWasabi.md",
            "/FAQ/FAQ-GeneralBitcoinPrivacy.md",
            "/FAQ/FAQ-Contribution.md"
          ]
        }
      ]
    },
    nav: [
      {
        text: "Why Wasabi",
        link: "/why-wasabi/"
      },
      {
        text: "Using Wasabi",
        link: "/using-wasabi/"
      },
      {
        text: "Building Wasabi",
        link: "/building-wasabi/"
      },
      {
        text: "FAQ",
        link: "/FAQ/"
      }
    ]
  }
}