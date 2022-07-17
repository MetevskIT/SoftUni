namespace MusicHub
{
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Text;
    using Data;
    using Initializer;
    using Microsoft.EntityFrameworkCore;

    public class StartUp
    {
        public static void Main(string[] args)
        {
            MusicHubDbContext context = 
                new MusicHubDbContext();


            //  DbInitializer.ResetDatabase(context);


            //Problem - 02
            int producerId = int.Parse(Console.ReadLine());
            Console.WriteLine(ExportAlbumsInfo(context, producerId));

            //Problem - 03
            int duration = int.Parse(Console.ReadLine());
            Console.WriteLine(ExportSongsAboveDuration(context,duration));
        }

        public static string ExportAlbumsInfo(MusicHubDbContext context, int producerId)
        {
            var albums = context.Albums
                .Include(a => a.Producer)
                .Include(a => a.Songs)
                .ThenInclude(s => s.Writer)
                .Where(a => a.ProducerId == producerId)
                .Select(a => new
                {
                    albumName = a.Name,
                    releaseDate = a.ReleaseDate,
                    producerName = a.Producer.Name,
                    songs = a.Songs
                              .Select(s => new
                              {
                                  songName = s.Name,
                                  price = s.Price,
                                  writer = s.Writer.Name

                              })
                              .OrderByDescending(s => s.songName)
                              .ThenBy(s => s.writer)
                              .ToList(),
                    albumPrice = a.Price

                })
                .ToList()
                .OrderByDescending(a => a.albumPrice);

            StringBuilder output = new StringBuilder();

            foreach (var album in albums)
            {
                output.AppendLine($"-AlbumName: {album.albumName}");
                output.AppendLine($"-ReleaseDate: {album.releaseDate.ToString("MM/dd/yyyy",CultureInfo.InvariantCulture)}");
                output.AppendLine($"-ProducerName: {album.producerName}");
                output.AppendLine($"-Songs:");

                int counter = 0;

                foreach (var song in album.songs)
                {
                    output.AppendLine($"---#{++counter}");
                    output.AppendLine($"---SongName: {song.songName}");
                    output.AppendLine($"---Price: {song.price:F2}");
                    output.AppendLine($"---Writer: {song.writer}");

                }

                output.AppendLine($"-AlbumPrice: {album.albumPrice:F2}");
            }

            return output.ToString().TrimEnd();
        }

        public static string ExportSongsAboveDuration(MusicHubDbContext context, int duration)
        {
            StringBuilder output = new StringBuilder();

            int counter = 0;

            var songs = context.Songs
                .Include(s => s.Writer)
                .Include(s => s.SongPerformers)
                .Include(s => s.Album.Producer)
                .ToList()
                .Where(s => s.Duration.TotalSeconds > duration)
                .Select(s => new
                {
                    songName = s.Name,
                    performerFullName = s.SongPerformers
                                        .Select(sp => $"{sp.Performer.FirstName} {sp.Performer.LastName}")
                                        .FirstOrDefault(),

                    writer = s.Writer.Name,
                    albumProducer = s.Album.Producer.Name,
                    duration = s.Duration.ToString("c", CultureInfo.InvariantCulture)
                })
                .OrderBy(s => s.songName)
                .ThenBy(s => s.writer)
                .ThenBy(s => s.performerFullName)
                .ToList();

            foreach (var song in songs)
            {
                output.AppendLine($"-Song #{++counter}");
                output.AppendLine($"---SongName: {song.songName}");
                output.AppendLine($"---Writer: {song.writer}");
                output.AppendLine($"---Performer: {song.performerFullName}");
                output.AppendLine($"---AlbumProducer: {song.albumProducer}");
                output.AppendLine($"---Duration: {song.duration}");

            }
            return output.ToString().TrimEnd();
              
                
                       
        }
    }
}
