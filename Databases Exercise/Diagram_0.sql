/*
   Monday, March 30, 20206:42:30 PM
   User: 
   Server: DESKTOP-29BGAAG
   Database: FurnitureFactory
   Application: 
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
ALTER TABLE dbo.productcatalog ADD CONSTRAINT
	PK_productcatalog PRIMARY KEY CLUSTERED 
	(
	number
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.productcatalog SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.productcatalog', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.productcatalog', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.productcatalog', 'Object', 'CONTROL') as Contr_Per BEGIN TRANSACTION
GO
ALTER TABLE dbo.customerlist ADD CONSTRAINT
	PK_customerlist PRIMARY KEY CLUSTERED 
	(
	financial_id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.customerlist SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.customerlist', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.customerlist', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.customerlist', 'Object', 'CONTROL') as Contr_Per BEGIN TRANSACTION
GO
ALTER TABLE dbo.orderhistory ADD CONSTRAINT
	PK_orderhistory PRIMARY KEY CLUSTERED 
	(
	order_number
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.orderhistory ADD CONSTRAINT
	FK_orderhistory_customerlist FOREIGN KEY
	(
	customer
	) REFERENCES dbo.customerlist
	(
	financial_id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.orderhistory SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.orderhistory', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.orderhistory', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.orderhistory', 'Object', 'CONTROL') as Contr_Per BEGIN TRANSACTION
GO
ALTER TABLE dbo.productquantity ADD CONSTRAINT
	FK_productquantity_productcatalog FOREIGN KEY
	(
	product
	) REFERENCES dbo.productcatalog
	(
	number
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.productquantity ADD CONSTRAINT
	FK_productquantity_orderhistory FOREIGN KEY
	(
	order_id
	) REFERENCES dbo.orderhistory
	(
	order_number
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.productquantity SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.productquantity', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.productquantity', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.productquantity', 'Object', 'CONTROL') as Contr_Per 