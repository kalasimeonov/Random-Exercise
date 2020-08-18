USE [FurnitureFactory]
GO

/****** Object:  Table [dbo].[productcatalog]    Script Date: 3/30/2020 6:39:29 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[productcatalog](
	[name] [nvarchar](50) NOT NULL,
	[description] [nvarchar](250) NOT NULL,
	[weight] [decimal](18, 0) NOT NULL,
	[barcode] [int] NOT NULL,
	[number] [int] NOT NULL,
	[price] [decimal](18, 0) NOT NULL
) ON [PRIMARY]
GO

