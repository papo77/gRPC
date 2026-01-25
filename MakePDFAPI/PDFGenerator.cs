using System;
using PdfSharp;
using PdfSharp.Drawing;
using PdfSharp.Fonts;
using PdfSharp.Pdf;

namespace MakePDF;

public class PDFGenerator
{
    private static XFont? CachedFont = new("Times New Roman", 20, XFontStyleEx.BoldItalic);
    private static XPen? RedPen = new(XColors.Red, 1.5);

    public static byte[]? GeneratePDF(string? docText)
    {
        if (GlobalFontSettings.FontResolver == null || GlobalFontSettings.FontResolver is not CustomFontResolver)
            GlobalFontSettings.FontResolver = new CustomFontResolver();

        if (string.IsNullOrEmpty(docText))
            return null;

        byte[]? fileContents;

        // Create a new PDF document.
        using (var document = new PdfDocument())
        {
            document.Info.Title = "Using Dataflow";
            document.Info.Subject = "Created with PDFsharp";
            PdfPage page;
            XGraphics? gfx;

            //double r=0;


            for (var i = 0; i < 4; i++)
            {
                // Create an empty page in this document.            
                page = document.AddPage();
                page.Size = PageSize.Letter;

                // Get an XGraphics object for drawing on this page.
                gfx = XGraphics.FromPdfPage(page);

                // Draw two lines with a red default pen.
                var width = page.Width.Point;
                var height = page.Height.Point;

                gfx.DrawLine(XPens.Red, 0, 0, width, height);
                gfx.DrawLine(XPens.Red, width, 0, 0, height);

                // Draw a circle with a red pen which is 1.5 point thick.
                var r = width / 5;
                gfx.DrawEllipse(RedPen, XBrushes.White,
                    new XRect(width / 2 - r, height / 2 - r, 2 * r, 2 * r));

                if (CachedFont != null)
                {
                    gfx.DrawString(docText, CachedFont, XBrushes.Black,
                        new XRect(0, 0, page.Width.Point, page.Height.Point), XStringFormats.Center);

                    gfx.DrawString($"\nPage {i + 1}", CachedFont, XBrushes.Blue,
                        new XRect(0, 150, page.Width.Point, page.Height.Point), XStringFormats.Center);
                }
            }

            using (var stream = new MemoryStream(1024 * 100)) // 100 KB initial capacity
            {
                document.Save(stream, true);
                fileContents = stream.ToArray();
            }
        }

        return fileContents;
    }
}
