#nullable disable

using System.Diagnostics;
using System.Runtime.InteropServices;
using PdfSharp.Fonts;
using PdfSharp.Snippets.Font;
using PdfSharp.WPFonts;



public class CustomFontResolver : IFontResolver
{
    /// <summary>
    ///     Specifies how to search for the font.
    /// </summary>
    private static readonly EnumerationOptions FontSearchOptions = new()
    {
        RecurseSubdirectories = true,
        MatchCasing = MatchCasing.CaseInsensitive,
        AttributesToSkip = 0,
        IgnoreInaccessible = true
    };


    private readonly SegoeWpFontResolver fallbackFontResolver;
    private readonly Dictionary<string, FontMeta> fontsByFace;


    /// <summary>
    ///     Initializes a new instance of the class.
    /// </summary>
    public CustomFontResolver()
    {
        fallbackFontResolver = new SegoeWpFontResolver();
        fontsByFace = new Dictionary<string, FontMeta>();
    }


    /// <summary>
    ///     Converts specified information about a required typeface into a specific font.
    /// </summary>
    /// <remarks>
    ///     PDFsharp calls ResolveTypeface only once for each unique combination of familyName, isBold, and isItalic.
    /// </remarks>
    public FontResolverInfo ResolveTypeface(string familyName, bool isBold, bool isItalic)
    {
        FontKey fontKey = new(familyName, isBold, isItalic);
        var resolverInfo =
            FindFont(fontKey, out var fileName) ??
            fallbackFontResolver.ResolveTypeface(isBold
                    ? SegoeWpFontResolver.FamilyNames.SegoeWPBold
                    : SegoeWpFontResolver.FamilyNames.SegoeWP,
                false, isItalic) ??
            new FontResolverInfo(fontKey.GetFaceName(), isBold, isItalic);

        fontsByFace[resolverInfo.FaceName] = new FontMeta { FileName = fileName };
        return resolverInfo;
    }

    /// <summary>
    ///     Gets the bytes of a physical font with specified face name.
    /// </summary>
    /// <remarks>
    ///     A face name previously retrieved by ResolveTypeface.
    ///     PDFsharp never calls GetFont twice with the same face name.
    /// </remarks>
    public byte[] GetFont(string faceName)
    {
        try
        {
            if (fontsByFace.TryGetValue(faceName, out var fontMeta))
            {
                var font = string.IsNullOrEmpty(fontMeta.FileName)
                    ? fallbackFontResolver.GetFont(faceName)
                    : File.ReadAllBytes(fontMeta.FileName);

                if (font != null)
                    return font;
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex);
        }

        return FontDataHelper.SegoeWP;
    }


    /// <summary>
    ///     Finds the specified font in the file system.
    /// </summary>
    private static FontResolverInfo FindFont(FontKey fontKey, out string fileName)
    {
        if (string.IsNullOrEmpty(fontKey.FamilyName))
        {
            fileName = "";
            return null;
        }

        try
        {
            var fontDirectories = GetFontDirectories();
            var desiredNames = GetDesiredNames(fontKey);
            var candidateNames = GetCandidateNames(fontKey);
            FileInfo candidateFileInfo = null;

            foreach (var fontDirectory in fontDirectories)
            {
                if (!Directory.Exists(fontDirectory))
                    continue;

                foreach (var fileInfo in new DirectoryInfo(fontDirectory)
                             .EnumerateFiles(fontKey.FamilyName + "*.ttf", FontSearchOptions))
                {
                    if (desiredNames.Any(name => name.Equals(fileInfo.Name, StringComparison.OrdinalIgnoreCase)))
                    {
                        fileName = fileInfo.FullName;
                        return new FontResolverInfo(fontKey.GetFaceName(), false, false);
                    }

                    if (candidateFileInfo == null &&
                        candidateNames.Any(name => name.Equals(fileInfo.Name, StringComparison.OrdinalIgnoreCase)))
                        candidateFileInfo = fileInfo;
                }
            }

            if (candidateFileInfo != null)
            {
                fileName = candidateFileInfo.FullName;
                return new FontResolverInfo(fontKey.GetFaceName(), fontKey.IsBold, fontKey.IsItalic);
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex);
        }

        fileName = "";
        return null;
    }

    /// <summary>
    ///     Gets the font directories depending on the OS.
    /// </summary>
    private static ICollection<string> GetFontDirectories()
    {
        if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            return new[]
            {
                @"C:\Windows\Fonts\",
                Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                    @"Microsoft\Windows\Fonts")
            };

        if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            return new[]
            {
                "/usr/share/fonts/truetype/"
            };

        return Array.Empty<string>();
    }

    /// <summary>
    ///     Gets desired font file names.
    /// </summary>
    private static ICollection<string> GetDesiredNames(FontKey fontKey)
    {
        if (fontKey.IsBold && fontKey.IsItalic)
            return new[]
            {
                fontKey.FamilyName + "bi.ttf",
                fontKey.FamilyName + "-BoldItalic.ttf",
                fontKey.FamilyName + "-BoldOblique.ttf"
            };

        if (fontKey.IsBold)
            return new[]
            {
                fontKey.FamilyName + "bd.ttf",
                fontKey.FamilyName + "-Bold.ttf"
            };

        if (fontKey.IsItalic)
            return new[]
            {
                fontKey.FamilyName + "i.ttf",
                fontKey.FamilyName + "-Italic.ttf",
                fontKey.FamilyName + "-Oblique.ttf"
            };

        return new[]
        {
            fontKey.FamilyName + ".ttf",
            fontKey.FamilyName + "-Regular.ttf"
        };
    }

    /// <summary>
    ///     Gets possible font file names.
    /// </summary>
    private static ICollection<string> GetCandidateNames(FontKey fontKey)
    {
        if (fontKey.IsBold || fontKey.IsItalic)
            return new[]
            {
                fontKey.FamilyName + ".ttf",
                fontKey.FamilyName + "-Regular.ttf"
            };

        return Array.Empty<string>();
    }

    /// <summary>
    ///     Identifies a font.
    /// </summary>
    private readonly record struct FontKey(
        string FamilyName,
        bool IsBold,
        bool IsItalic)
    {
        public string GetFaceName()
        {
            return (string.IsNullOrEmpty(FamilyName) ? "Empty" : FamilyName) +
                   (IsBold ? "-Bold" : "") +
                   (IsItalic ? "-Italic" : "");
        }
    }

    /// <summary>
    ///     Represents information associated with a font.
    /// </summary>
    private class FontMeta
    {
        public string FileName { get; init; }
    }
}